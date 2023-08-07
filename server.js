const express = require("express");
const bodyParser = require('body-parser');
const JobController = require("./server/routes/jobController.js");
const app = express();
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());  
app.use("/jobs", JobController);

app.get("/", (req, res) => {
  res.status(200).send("Hello from the controller");
});

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
