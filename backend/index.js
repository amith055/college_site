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
  database: "ClgManagement",
  password: "012005",
  port: 5432,
});

function getdata(rawdata){
  const columns = {};
  rawdata.fields.forEach(field => {
      columns[field.name] = [];
    });
  
    rawdata.rows.forEach(row => {
      rawdata.fields.forEach(field => {
          columns[field.name].push(row[field.name]);
    });
  });
  return columns;
}

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
    const result = await pool.query("SELECT * FROM faculty WHERE faculty_unqid = $1 AND password = $2 ", [
      username,
      password
    ]);
   const designation = result.rows[0].designation;
    if (result.rows.length === 0) return res.status(400).json({ error: "Invalid credentials" });
    if(ltype === 'principle' && designation === "PRINCIPAL"){
      res.json({ message: "true" });
    }else if(ltype === 'hod' && designation === "HOD"){
      res.json({ message: "true" });
    }else if(ltype === 'faculty' && ( designation === "ASST PROFESSOR" || designation === "ASSOCIATE PROFESSOR" || designation === "PROFESSOR")){
      res.json({ message: "true" });
    }else{
      res.json({message : "false"})
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/faculty", async (req,res) => {
  try{
    const result = await pool.query("SELECT * FROM faculty");
    res.json(result.rows);
  }catch(e){
    res.json(500).json({error: e.message});
  }
});






app.listen(5000, () => console.log("Server running on port 5000"));
