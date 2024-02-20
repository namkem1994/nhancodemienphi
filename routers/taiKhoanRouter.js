const express = require("express");
const controller = require("../controller/taiKhoanController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get to ... taikhoan");
});
router.post("/", controller.sendTaiKhoan);
module.exports = router;
