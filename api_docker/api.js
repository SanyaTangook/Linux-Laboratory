const express = require('express');
const app = express();
const Docker = require('dockerode');
const stream = require('stream');

const docker = new Docker()


app.post('/containers', (req, res, next) => {
    docker.createContainer({
        Image: 'ubuntu',
        AttachStdin: false,
        AttachStdout: true,
        AttachStderr: true,
        Tty: true,
    }).then(function (container) {
        return container.start();
    }).then((container) => {
        res.json({message: " start containers complete"});
    });
    
});



app.listen(9000, () => {
    console.log("Starting node.js at port " + 9000);
  });