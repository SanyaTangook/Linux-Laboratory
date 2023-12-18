import express from "express";
const app = express();
import Docker from "dockerode";
import stream from "stream";

const docker = new Docker();

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
      res.json(`start containers complete`);
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

app.get('/remove/:id', (req, res, next) => {
  const container = docker.getContainer(req.params.id);
  container.remove({ force: true }, (err, data) => {
    res.json("remove containers complete ")
  });
});

app.listen(9000, () => {
  console.log("Starting node.js at port " + 9000);
});