//객체       //key값만 가져옴
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comment = sequelize.define(
    "Comment",
    {
      //속성 {Columns - Fields}
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false,
      },
      //외래키 1단계 (좋은접근 x)
      //   board_id: {
      //     type: DataTypes.INTEGER,
      //     references: {
      //       model: "boards",
      //       key: "id",
      //     },
      //   },
    },
    {
      sequelize: sequelize,
      timestamps: true,
      modelName: "Comment", //js에서 접근할 이름
      tableName: "comments", //sql에서 접근할 이름
      paranoid: true, //
      charset: "utf8",
      collation: "utf8_general_ci",
    }
    // comment.associate = function(models) {
    //     models.User.hasMany(models.Code, {
    //         foreignKey: 'board_id',
    //         onDelete : 'cascade'
    //     });
    // }
  );

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Board, {
      foreignKey: "boardId",
      targetKey: "id",
      as: "board",
    });
  };

  return Comment;
};
