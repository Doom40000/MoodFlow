const { session } = require("../models/db");

const postNewMessage = async (user, message) => {
  try {
    const result = await session.run(
      `
      MATCH (u: User)
      WHERE u.username = $user
      CREATE (p: Post {message: $message, user: $user})
      CREATE (u)-[:HAS_POSTED]->(p)
      `,
      { message, user }
    );
  } catch (error) {
    console.error("Could not create post.");
    throw new Error();
  }
};

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

module.exports = { receivePosts, postNewMessage };
