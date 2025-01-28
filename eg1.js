const express = require ("express");
const morgan = require ("morgan");
const totalStudents = require("./app");
//const subtractStudents = require("./app");

const app= express();
app.use(morgan('dev'));
app.use(express.json());
const port = 4029;

app.get("/", (req, res) => {
    res.send("cod!!!!!");
});

app.get("/totalStudents", (req, res) => {
    const { boys, girls} = req.body;
     const students = totalStudents(boys, girls);
     console.log(students);
     res.json(students)
})


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
});