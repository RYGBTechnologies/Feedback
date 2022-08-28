const { Server } = require('socket.io');
const express = require('express');
const app = express();
const fs = require('fs');
var privateKey = fs.readFileSync("rygb_cert/cloudflare/rygb.tech.pem", "utf8");
var certificate = fs.readFileSync("rygb_cert/cloudflare/rygb.tech.crt", "utf8");
var credentials = { key: privateKey, cert: certificate };
const https = require('https');

var httpsServer = https.createServer(credentials, app);
const io = new Server(httpsServer);
io.on("connection", (socket) => {
    console.log("> User connected to socket.");
});

app.get('/', (req, res) => {
    res.send("Hello World!");
})

httpsServer.listen(4983, () => {
    console.log("> Server listening on port 4983.");
});