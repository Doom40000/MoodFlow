const {
  checkLoginData,
  checkRegister,
} = require("./controllers/authController.js");
const {
  logPostReq,
  getNodesBasedOnDays,
} = require("./controllers/flowchart_controller.js");

const router = require("express").Router();

router.get("/getReq/:day", getNodesBasedOnDays);
router.post("/postReq", logPostReq);
router.post("/checkLogin", checkLoginData);
router.post("/checkRegisterData", checkRegister);
module.exports = router;
