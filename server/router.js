const {
  checkLoginData,
  checkRegister,
} = require("./controllers/authController.js");
const {
  logPostReq,
  getNodesBasedOnDays,
} = require("./controllers/flowchart_controller.js");
const { receivePosts } = require("./controllers/postController.js");
const router = require("express").Router();

router.get("/getReq/:day", getNodesBasedOnDays);
router.post("/postReq", logPostReq);
router.post("/checkLogin", checkLoginData);
router.post("/checkRegisterData", checkRegister);
router.get("/receivePosts", receivePosts);
module.exports = router;
