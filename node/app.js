var faker = require("faker"),
  mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "connection",
});
/*for (i = 0; i <= 100; i++) {
  console.log(faker.internet.email());
  console.log(faker.date.past());
}*/
