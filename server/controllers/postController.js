const { session } = require("../models/db");

async function receivePosts(req, res) {
  try {
    const result = await session.run(`
   MATCH (n:Post)
   return n
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

module.exports = { receivePosts };
