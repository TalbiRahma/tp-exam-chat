const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const { author, content } = req.body;
  messages.push({
    author,
    content,
    time: new Date().toLocaleTimeString()
  });
  res.status(201).json({ message: "Message ajouté" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
