const {
  checkLoginData,
  checkRegister,
  authenticateToken,
} = require("./controllers/authController.js");
const {
  logPostReq,
  getNodesBasedOnDays,
} = require("./controllers/flowchart_controller.js");
const { postNewMessage } = require("./controllers/postController.js");

const router = require("express").Router();

router.get("/getReq/:day", getNodesBasedOnDays);
router.post("/postReq", logPostReq);
router.post("/checkLogin", checkLoginData);
router.post("/checkRegister", checkRegister);
router.post("/createPost", authenticateToken, (req, res) => {
  const currentUser = req.user;
  const { message } = req.body;
  postNewMessage(currentUser.username, message);
  res.status(200).send("Post created");
});
module.exports = router;
