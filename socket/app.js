import { Server } from "socket.io";
import { createServer } from "http";

// Create a basic HTTP server (required for Socket.IO)
const httpServer = createServer();

// Initialize Socket.IO with CORS settings
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://real-nest.netlify.app",
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Use PORT from environment (for Render) or fallback
const PORT = process.env.PORT || 4495;

// Track online users
let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

// Handle Socket.IO events
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    removeUser(socket.id);
  });
});

// Start server
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
