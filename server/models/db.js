const neo4j = require("neo4j-driver");

const neo4jURI = "";
const neo4jUser = "";
const neo4jPassword = "";

const driver = neo4j.driver(
  neo4jURI,
  neo4j.auth.basic(neo4jUser, neo4jPassword)
);
const session = driver.session();

module.exports = { session };
