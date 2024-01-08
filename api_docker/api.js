const express = require('express');
const Docker = require('dockerode');
const docker = new Docker();
const app = express();
const port = 9000

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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})