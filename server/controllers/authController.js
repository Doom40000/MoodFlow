const { session } = require("../models/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkLoginData = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const response = await session.run(
      `
      MATCH (u:User { username: $username })
      RETURN u.password as hashedPassword
      `,
      { username }
    );

    if (response.records.length > 0) {
      const hashedPassword = response.records[0].get("hashedPassword");

      bcrypt.compare(password, hashedPassword, (err, result) => {
        if (err) {
          throw new Error("Password comparison failed");
        }

        if (result) {
          const token = jwt.sign({ username }, "secret", { expiresIn: "48h" });
          res.status(200).json({ message: "Login successful!", token });
        } else {
          res.status(401).json({ message: "Invalid credentials!" });
        }
      });
    } else {
      res.status(401).json({ message: "Invalid credentials!" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const checkRegister = async (req, res) => {
  try {
    let { username, password, email } = req.body;

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const response = await session.run(
        `
        CREATE (u:User { username: $username, password: $password, email: $email })
        RETURN u
        `,
        { username, password: hash, email }
      );

      if (response.records.length > 0) {
        res.status(200).json({ message: "User created successfully!" });
      } else {
        res.status(500).json({ message: "Could not create user" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not register", error });
  }
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  console.log(authHeader);
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = {
  checkLoginData,
  checkRegister,
  authenticateToken,
};
