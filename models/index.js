//문법을 빡세게 관리할때
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
//.js로 끝나는 파일들 반복돌려서 함수 호출
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      //뒤에글짜 3개 짤라서
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  //forEach 반복돌리기
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

//전체 모델에서 키값별로 associate함수를 실행한다. Board, Comment 있으면 associate 함수를 호출해준다.)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
