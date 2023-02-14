// import { useState } from 'react';
import './App.css';
import { io } from 'socket.io-client';
// import { Socket_I } from './Components/Socket-I/Socket_I';
import { Chats } from './Components/Chats/Chats';
export const socket = io.connect('http://localhost:8080');

function App() {

  return (
    <div className="App">
      <Chats/>
    </div>
  );
}

export default App;
