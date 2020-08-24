const mysql = require("mysql2/promise");

/* createconnection은 한번 연결해주고 끊어줌
mysql.createConnection({

});
*/

// 기존에 있는거 연결이어서해줌
module.exports = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "express_board",
  connectionLimit: 10,
});
