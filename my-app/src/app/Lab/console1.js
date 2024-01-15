// 'use client'

// import React, { useEffect, useRef } from 'react';
// import { Terminal } from 'xterm';
// import { AttachAddon } from 'xterm-addon-attach';
// import { FitAddon } from 'xterm-addon-fit';
// import { WebLinksAddon } from 'xterm-addon-web-links';
// import { Unicode11Addon } from 'xterm-addon-unicode11';
// import { SerializeAddon } from 'xterm-addon-serialize';
// import { io } from 'socket.io-client';

// const MyTerminalComponent = () => {
//   const terminalRef = useRef(null);
//   const socketRef = useRef(null);

//   useEffect(() => {
//     const initializeTerminal = () => {
//       const terminal = new Terminal({
//         screenKeys: true,
//         useStyle: true,
//         cursorBlink: true,
//         cursorStyle: 'bar',
//         fullscreenWin: true,
//         maximizeWin: true,
//         screenReaderMode: true,
//         cols: 128,
//         theme: {
//           foreground: 'white',
//           background: '#2A2C34',
//           cursor: 'help',
//           lineHeight: 16,
//         },
//         allowProposedApi: true
//       });

//       const id = window.location.pathname.split('/')[3];
//       const host = window.location.origin;
//       const socket = io.connect("localhost:9001");

//       socket.emit('exec', id, terminal.cols, terminal.rows);

//       terminal.open(terminalRef.current);
//       const attachAddon = new AttachAddon(socket);
//       const fitAddon = new FitAddon();
//       terminal.loadAddon(fitAddon);
//       const webLinksAddon = new WebLinksAddon();
//       terminal.loadAddon(webLinksAddon);
//       const unicode11Addon = new Unicode11Addon();
//       terminal.loadAddon(unicode11Addon);
//       const serializeAddon = new SerializeAddon();
//       terminal.loadAddon(serializeAddon);

//       terminal._initialized = true;
//       terminal.focus();

//       fitAddon.fit();
//       socket.emit('cmd', "export TERM=xterm\n");
//       socket.emit('cmd', "PS1=\"\\[\\033[01;31m\\]\\u\\[\\033[01;33m\\]@\\[\\033[01;36m\\]\\h \\[\\033[01;33m\\]\\w \\[\\033[01;35m\\]\\$ \\[\\033[00m\\]\"\n");
//       socket.emit('cmd', "alias ls='ls --color'\n");
//       socket.emit('cmd', "alias ll='ls -alF'\n");
//       socket.emit('cmd', "clear\n");

//       fitAddon.fit();

//       socket.on('show', (data) => {
//         terminal.write(data);
//       });

//       socket.on('end', (status) => {
//         socket.disconnect();
//         terminal.write('\r\n\nconnection has been terminated from the server-side (hit refresh to restart)\n');
//       });

//       socketRef.current = socket;
//     };

//     initializeTerminal();

//     return () => {
//       // Cleanup code if needed
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//       }
//     };
//   }, []); // Run only on mount and unmount

//   return React.createElement('div', { ref: terminalRef });
// };

// export default MyTerminalComponent;
