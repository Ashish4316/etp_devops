const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "database",      
  user: "root",
  password: "rootpassword",
  database: "ecommerce_db"
});

connection.connect((err) => {
  if(err){
    console.error("Connection failed:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

console.log("Every thing is Fine")