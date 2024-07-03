const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const tasksRouter = require("./routes/tasks");

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use("/api/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;