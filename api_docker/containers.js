import { Server } from "socket.io";
import docker from "dockerode";
import stream from "stream";

const io = new Server(9000)

io.on('connection', (socket) => {
    socket.on('exec', (id, w, h) => {
        const container = docker.getContainer(id);
        let cmd = {
            'AttachStdout': false,
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