const Inverter = require("../models/inverter.models");



exports.save_inverter = async (req,res) => {
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
};


exports.get_inverter = async (req, res) => {
    try {
      const inverters = await Inverter.find();
      return res.json({
        success: true,
        message: "inverters fetched successfully",
        data: inverter,
        count: inverters.length,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ success: false, message: err.message });
    }
  };

  exports.update_inverter = async (req, res) => {
    const { brand, model, year } = req.body;
    try {
      const updatedInverter = await Inverter.findByIdAndUpdate(
        { _id: req.params.id },
        { brand, model, year },
        { isNew: true }
      );
      return res
        .status(200)
        .json({ message: "INVERTER updated successfully", data: updatedInverter });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: err.message });
    }
  };


  exports.find_inverter = async (req, res) => {
    try {
      const inverter = await inverter.findOne({ model: req.query.model });
      return res.status(200).json({ message: "Inverter found", data: inverter });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: err.message });
    }
  };
  
  
  exports.delete_inverter = async (req, res) => {
    try {
      await Inverter.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Inverter deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: err.message });
    }
  };

