require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');

const PORT = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.static(process.cwd() + path));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
app.get('*', (reg, res)=> {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})
// sa
app.get("/api/users", (req, res) => {
  console.log("api/users called!!!!!!!");
  res.json("Микиртумов григорий");
});
