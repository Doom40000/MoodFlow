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
    throw new Error(error);
  }
};

module.exports = {
  postNewMessage,
};
