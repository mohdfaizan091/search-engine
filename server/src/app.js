const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// routes
const healthRoutes = require("./routes/health.routes");
app.use("/", healthRoutes);
//documents routes
const documentRoutes = require("./routes/documents.routes");
app.use("/", documentRoutes);

//search routes
const searchRoutes = require("./routes/search.routes");
app.use("/", searchRoutes);

module.exports = app;
