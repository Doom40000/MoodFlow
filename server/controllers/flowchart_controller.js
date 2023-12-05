const { session } = require("../models/db"); // Import the session setup
const { format, parseISO } = require("date-fns");

// Store the daily feedback as nodes
async function logPostReq(req, res) {
  try {
    const postReq = await req.body;
    console.log("postReq.nodes", postReq.nodes);
    for (const node of postReq.nodes) {
      const { questionNumber } = node;
      const { date } = node;
      const parsedDate = parseISO(date);
      const formattedDate = format(parsedDate, "dMMMyyyy");
      console.log(formattedDate);
      const answerText = node.answerText;

      const result = await session.run(
        `
        CREATE (q:Question {questionNumber: $questionNumber, date: $formattedDate, answerText: $answerText})
        CREATE (a:Answer {answerText: $answerText, date: $formattedDate})
        CREATE (q)-[:HAS_ANSWERED]->(a)
        `,
        { questionNumber, answerText, formattedDate }
      );
    }
    res.status(200).send("Success!");
  } catch (error) {
    throw new Error(error);
  }
}

async function getNodesBasedOnDays(req, res) {
  try {
    const { day } = req.params;
    console.log(day);
    console.log("Hey");

    const result = await session.run(`
   MATCH (n:Question)
   WHERE n.date = '4Dec2023'
   return n LIMIT 10
   `);
    const responseArray = [];
    result.records.map((node) => {
      console.log(node._fields[0].properties);
      responseArray.push(node._fields[0].properties);
    });
    res.json(responseArray);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  logPostReq,
  getNodesBasedOnDays,
};
