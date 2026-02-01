const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// routes
const healthRoutes = require("./routes/health.routes");
app.use("/", healthRoutes);


module.exports = app;
