import express from "express";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";

const { Pool } = pg;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "012005",
  port: 5432,
});

// Register User
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, password]
    );
    res.json({ message: "User registered successfully", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login User
app.post("/login", async (req, res) => {
  const { username, password, type} = req.body;
  const ltype = type.toLowerCase();
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2 AND type=$3", [
      username,
      password,
      ltype
    ]);

    if (result.rows.length === 0) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful!", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
