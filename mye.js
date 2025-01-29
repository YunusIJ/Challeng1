const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const routes = require("./routes/Inverters.routes");
const router = require("./routes/Inverters.routes");

const app = express();
const port = 4020;

app.use(morgan("dev"));
app.use(express.json());






app.get("/", (req,res) => {
    res.send("WELCOME TO JSTORES");
});

app.use('/api/v1', router);






app.listen(port,() => {
    console.log(`server is running on port ${port}`)
});





