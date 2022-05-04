const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin:"*"
  },
});

io.on("connection", (socket) => {

  socket.on("chat", (payload) => {
    console.log("payload", payload);
    io.emit("chat", payload);
  });
});
// app.listen(5000,()=>{console.log("Server is active...")})
server.listen(5000, () => {
  console.log("Server is active...");
});
