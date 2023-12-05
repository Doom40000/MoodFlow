const { session } = require("../models/db.js");

const checkLoginData = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    const response = await session.run(
      `
      MATCH (u:User { username: $username, password: $password })
      RETURN u
      `,
      { username, password }
    );

    if (response.records.length > 0) {
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid credentials!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const checkRegister = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    console.log(req.body);

    const response = await session.run(
      `
      CREATE (u:User { username: $username, password: $password, email: $email })
      RETURN u
      `,
      { username, password, email }
    );

    if (response.records.length > 0) {
      res.status(200).json({ message: "User created successfully!" });
    } else {
      res.status(500).json({ message: "Could not create user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not register", error });
  }
};

module.exports = {
  checkLoginData,
  checkRegister,
};
