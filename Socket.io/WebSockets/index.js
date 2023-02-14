// Module importing

const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');
const cors = require('cors')
require('dotenv').config();
const connect = require('./Database/MongoDB.js')
const PORT = process.env.PORT || 8080


// servers

const app = express();
app.use(cors());
app.use(express.json());


// Routers
const UserRouter = require('./Features/Routes/User.js')
app.use('/users', UserRouter);






const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors:{
        origin:"http://localhost:3000",
        methods:['GET', 'POST', 'PATCH', 'DELETE']
    }
});

let messageArray = [];

io.on('connection', (socket)=>{
    console.log('new user  connected');
    socket.emit('recieve_message', {messages:messageArray});
    socket.broadcast.emit('recieve_message', {messages:messageArray});

    socket.on('send_message', (data)=>{
        const {message} = data;

        messageArray.push(message);

        socket.emit('recieve_message', {messages:messageArray});
        socket.broadcast.emit('recieve_message', {messages:messageArray});
    })

    socket.on('disconnect', ()=>{
        console.log('disconnected')
    })
});

httpServer.listen(PORT, async()=>{
    await connect();
    console.log('server started at http://localhost:8080')
});

