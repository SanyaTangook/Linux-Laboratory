import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import Docker from "dockerode";
import stream from "stream";


const app = express();
app.use(cors());
app.set ( "view engine", "ejs" );

const server = http.createServer(app);

const docker = new Docker();

const io = new Server((server)
  ,{
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  socket.on('exec', (id, w, h) => {
      const container = docker.getContainer(id);
      let cmd = {
          'AttachStdout': true,
          'AttachStderr': true,
          'AttachStdin': true,
          'Tty': true,
          Cmd: ['/bin/bash'],
      };
      socket.on('resize', (data) => {
          container.resize({h: data.rows, w: data.cols}, () => {
          });
      });
      container.exec(cmd, (err, exec) => {
          let options = {
              'Tty': true,
              stream: true,
              stdin: true,
              stdout: true,
              stderr: true,
              // fix vim
              hijack: true,
          };

          container.wait((err, data) => {
              socket.emit('end', 'ended');
          });

          if (err) {
              return;
          }

          exec.start(options, (err, stream) => {
              stream.on('data', (chunk) => {
                  socket.emit('show', chunk.toString());
              });

              socket.on('cmd', (data) => {
                  if (typeof data !== 'object')
                      stream.write(data);
              });
          });
      });
  });

  socket.on('attach', (id, w, h) => {
      const container = docker.getContainer(id);

      const logStream = new stream.PassThrough();
      logStream.on('data', (chunk) => {
          socket.emit('show', chunk.toString('utf8'));
      });

      const logs_opts = {
          follow: true,
          stdout: true,
          stderr: true,
          timestamps: false,
      };

      const handler = (err, stream) => {
          container.modem.demuxStream(stream, logStream, logStream);
          if (!err && stream) {
              stream.on('end', () => {
                  logStream.end('===Logs stream finished===');
                  socket.emit('end', 'ended');
                  stream.destroy();
              });
          }
      };

      container.logs(logs_opts, handler);
  });

  socket.on('getSysInfo', (id) => {
      const container = docker.getContainer(id);
      container.stats((err, stream) => {
          if (!err && stream != null) {
              stream.on('data', (data) => {
                  socket.emit(id, data.toString('utf8'));
              });
              stream.on('end', () => {
                  socket.emit('end', 'ended');
                  stream.destroy();
              });
          }
      });
  });

  socket.on('end', () => {
      array = [];
      streams.map((stream) => {
          stream.destroy();
      });
      console.log('--------end---------');
  });

  let array = [];
  let streams = [];
});


app.get('/console/:id', (req, res, next) => {
  res.render('terminal')
});

app.post("/containers/:Name", (req, res) => {
  docker
    .createContainer({
      Image: req.params.Name,
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
    })
    .then((container) => container.start())
    .then(() => {
      res.status(200);
      res.json(`start containers ${req.params.Name} complete`);
    });
});
app.get("/containerslist", (req, res) => {
  docker.listContainers((err, containers) => {
    const containerObjects = containers.map((element) => ({
      id: element.Id,
      Name: element.Names,
    }));
    res.json(containerObjects);
  });
});



app.get("/stop/:id", (req, res, next) => {
  const container = docker.getContainer(req.params.id);
  container.stop(null, (err, data) => {
    res.json({ message: "stop containers complete" });
  });
});

app.get("/remove/:id", (req, res, next) => {
  const container = docker.getContainer(req.params.id);
  container.remove({ force: true }, (err, data) => {
    res.json("remove containers complete ");
  });
});

server.listen(3001, () => {
  console.log("Starting node.js at port " + 3001);
});
