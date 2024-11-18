const express = require('express');
const http=require('http');
const app = express();

app.set('view engine','hbs');

app.get('/',(req,res) =>{
    res.render('index');
})

var server = http.createServer(app);

const io= require("socket.io")(server);

io.on("connection",function(socket){

    socket.on("message",function(message){
        console.log(message)
        socket.broadcast.emit("message",message);
        
    })
})
const PORT = process.env.PORT || 8000
server.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
    
})