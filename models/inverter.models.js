const mongoose = require("mongoose");


const inverterSchema = new mongoose.Schema(
    {
      brand: String,
      model: { type: String, unique: true},
      year: { type: Number, unique: true},
    },
    {
      versionKey: false, 
      timestamps: true, 
    }
  );
  const Inverter = mongoose.model("Inverter", inverterSchema);
  
  module.exports = Inverter;