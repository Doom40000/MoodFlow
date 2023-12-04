const neo4j = require("neo4j-driver");

const neo4jURI = "neo4j+s://b367dab6.databases.neo4j.io";
const neo4jUser = "neo4j";
const neo4jPassword = "3sZJ1gLhhugcnJMix8BPrFgTSjqHCc8VXwxvLScZtx8";

const driver = neo4j.driver(
  neo4jURI,
  neo4j.auth.basic(neo4jUser, neo4jPassword)
);
const session = driver.session();

// Sample Name to try fetching from Backend
let sampleData = ["Dennis", "Someone else"];

module.exports = { sampleData, session };
