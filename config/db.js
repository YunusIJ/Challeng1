const mongoose = require("mongoose");


const connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/jstores")
    console.log("connected to jstores")
};
module.exports = connectDb();