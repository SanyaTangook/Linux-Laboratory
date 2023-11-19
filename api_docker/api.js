const express = require("express");
const app = express();
const Docker = require("dockerode");
const stream = require("stream");

const docker = new Docker();

app.post("/containers", (req, res) => {
  docker
    .createContainer({
      Image: "ubuntu",
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
    })
    .then(function (container) {
      return container.start();
    })
    .then((container) => {
      res.json("start containers complete");
    });
});

app.get("/containerslist", (req, res) => {
    docker.listContainers(function (err, containers) {
      const containerObjects = containers.map(element => ({ id: element.Id  , Name: element.Names}));
      res.json(containerObjects);
    });
  });
  
  

app.get("/stop/:id", (req, res, next) => {
  const container = docker.getContainer(req.params.id);
  container.stop(null, (err, data) => {
    res.json({ message: "stop containers complete" });
    console.log(req);
  });
});

app.listen(9000, () => {
  console.log("Starting node.js at port " + 9000);
});
