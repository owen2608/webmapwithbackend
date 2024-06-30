const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2000;

app.use(bodyParser.json());

let users = ["userOne", "userTwo", "userThree", "Peeshro"];

app.get("/api", (req, res) => {
  // Sends the data to be used
  res.json({ users });
});

app.post("/api", (req, res) => {
  const { user } = req.body;
  if (user) {
    users.push(user);
    res.status(201).json({ message: "User added successfully", users });
  } else {
    res.status(400).json({ message: "User is required" });
  }
});

app.delete("/api", (req, res) => {
  const { user } = req.body;
  if (user) {
    const index = users.indexOf(user);
    if (index !== -1) {
      users.splice(index, 1);
      res.status(200).json({ message: "User deleted successfully", users });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(400).json({ message: "User is required" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
