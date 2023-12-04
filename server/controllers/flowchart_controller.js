const { sampleData } = require("../models/db");
const { session } = require("../models/db"); // Import the session setup
const { format, parseISO } = require('date-fns')

// Log a simple Post Request and data within
async function logData(req, res) {
  try {
    const phoneData = req.body;
    res.status(200).send(`${phoneData.name}`);
    console.log(phoneData);
    console.log(phoneData.name);
    console.log(phoneData.mood);
  } catch (err) {
    res.status(401).send("Something went very wrong!");
    console.error(err);
  }
}

// Store the daily feedback as nodes
async function logPostReq(req, res) {
  try {
    const postReq = await req.body;
    console.log("postReq.nodes", postReq.nodes);
    for (const node of postReq.nodes) {
      const {questionNumber} = node;
      const {date} = node;
      const parsedDate = parseISO(date);
      const formattedDate = format(parsedDate, "d'MMM'yyyy");
      const answerText = node.answerText;

      const result = await session.run(
        `
        CREATE (q:Question {questionNumber: $questionNumber, date: $formattedDate})
        CREATE (a:Answer {answerText: $answerText, date: $formattedDate})
        CREATE (q)-[:HAS_ANSWERED]->(a)
        `,
        { questionNumber, answerText, formattedDate }
      );
    }
    res.status(200).send("Success!");
  } catch (error) {
    throw new Error(error);
    res.status(500).send("Bad");
  }
}

module.exports = {
  logPostReq,
};
