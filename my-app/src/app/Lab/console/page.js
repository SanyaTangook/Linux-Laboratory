'use client'
import { useState , useEffect } from "react";
import { socket } from "./socket";
import useEffectOnce from "../../../../hook/use-effect-once";

export default function Page(){

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // useEffect in React call 2 but useEffectOnce is func call 1
  useEffectOnce(() =>{
    socket.on('data' , (message) =>{
      setMessages((prevMessages) => [...prevMessages , message])
    });
  });

  const sendData = () =>{
    socket.emit('exec' , currentMessage)
    setCurrentMessage('');
  }
  const text =  messages.map((messages,index) =>{console.log(`${index} , ${messages}`)} )
  return (

    <div>
        {/* Display the messages */}
        {messages.map((message, index) => (
            <p key={index}>{message}</p>
        ))}

        {/* Input field for sending new messages */}
        <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
        />

        {/* Button to submit the new message */}
        <button onClick={sendData}>Send</button>
    </div>
  )
}