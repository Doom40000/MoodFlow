const {
  logPostReq,
} = require("./controllers/flowchart_controller.js");
const router = require("express").Router();



router.post("/postReq", logPostReq);

module.exports = router;
