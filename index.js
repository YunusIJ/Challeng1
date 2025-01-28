const express = require ("express");
const morgan = require ("morgan");

const app= express();
app.use(morgan('dev'));
const port = 4029;

app.get("/", (req, res) => {
    res.send("Guy coding hard ooo!!!!!!");
});


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
});