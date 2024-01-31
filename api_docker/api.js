import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import Docker from "dockerode";
import  stream  from "stream";

const app = express();
app.use(cors());
const server = http.createServer(app);

const docker = new Docker();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
    console.log(`ID: ${socket.id}`)
    socket.on('exec' ,(msg) =>{
      console.log(msg)
    socket.emit('data' , msg);
    })
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
