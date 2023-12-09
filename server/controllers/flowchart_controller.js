const { session } = require("../models/db"); // Import the session setup
const { format, parse } = require("date-fns");

// Store the daily feedback as nodes
async function logPostReq(req, res) {
  try {
    const postReq = await req.body;
    for (const node of postReq.nodes) {
      const { questionNumber } = node;
      const { date } = node;
      const parsedDate = parseISO(date);
      const formattedDate = format(parsedDate, "dMMMyyyy");
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

const getNodesBasedOnDays = async (req, res) => {
  try {
    const { day } = req.params;
    const parsedDate = parse(day, "dMMMyyyy", new Date());
    const formattedDateString = format(parsedDate, "dMMMyyyy");

    const result = await session.run(`
   MATCH (n:Question)
   WHERE n.date = '${formattedDateString}'
   return n
   `);
    const responseArray = [];
    result.records.map((node) => {
      responseArray.push(node._fields[0].properties);
    });
    res.json(responseArray);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  logPostReq,
  getNodesBasedOnDays,
};
