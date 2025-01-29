const express = require("express");
const { save_inverter, get_inverter, find_inverter, delete_inverter, update_inverter } = require("../controller/user.controller");

const router = express.Router();



router.post('/save',save_inverter)
router.get('/get',get_inverter)
router.get('/find',find_inverter)
router.delete('/find',delete_inverter)
router.put('/update/:id',update_inverter)


module.exports = router;