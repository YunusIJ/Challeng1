const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();
const port = 4020;

app.use(morgan("dev"));
app.use(express.json());

const connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/jstores")
    console.log("connected to jstores")
};
connectDb();

const inverterSchema = new mongoose.Schema(
    { brand: String,
      model: String,
       year: Number
    }
);

const Inverter = mongoose.model("inverter", inverterSchema);

app.get("/", (req,res) => {
    res.send("WELCOME TO JSTORES");
});

app.post("/save-inverter", async (req,res) {
    const {brand, model, year} = req.body;

    try {
        const saveInverter = new Inverter({brand, model, year});
        await saveInverter.save();
        return res
        .status(201)
        .json({
            success:true,
            message: "Inverter saved successfully",
            data: saveInverter,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message})
    }
});





app.listen(port,() => {
    console.log(`server is running on port ${port}`)
});





