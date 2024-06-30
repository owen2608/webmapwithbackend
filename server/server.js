const express = require("express");
const app = express();
const port = 2000;

app.get("/api", (req, res) => {
  //Sends the data to be used
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
