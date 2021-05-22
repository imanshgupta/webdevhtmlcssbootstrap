var mysql2 = require("mysql2");
var con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "artimanish123",
  database: "connection",
});
var q = "USE CONNECTION";
con.query(q, (err, result, fields) => {
  if (err) throw err;
  console.log(result);
});
con.end();
