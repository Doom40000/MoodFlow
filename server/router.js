const { logPostReq } = require("./controllers/flowchart_controller.js");
const {
  getNodesBasedOnDays,
} = require("./controllers/graph_test_controller.js");
const router = require("express").Router();

router.get("/getReq/:day", getNodesBasedOnDays);
router.post("/postReq", logPostReq);

module.exports = router;
