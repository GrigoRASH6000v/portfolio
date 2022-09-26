const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const serveStatic = require("serve-static");
const router = require("./routes");

const PORT = process.env.PORT;

app = express();
const clientPath = path.join(__dirname, "..", "client");
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(serveStatic(clientPath));
app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
