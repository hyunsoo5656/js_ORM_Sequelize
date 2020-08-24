const pool = require("./index");

module.exports = {
  getBoardList: async () => {
    const [rows, fields] = await pool.query("select * from board");
    return [rows, fields];
  },

  getBoardDetail: async (boardId) => {
    const query = `select * from board where id=?`;
    const [rows, fields] = await pool.query(query, [boardId]);
    return [rows, fields];
  },

  // let board = null;
  // for (let _board of Board) {
  //   if (_board.id === boardId) {
  //     board = _board;
  //   }
  // }
  // return board;
  // createBoard: function (title, content, author) {
  //   Board = Board.concat([
  //     {
  //       id: autoId,
  //       title: title,
  //       content: content,
  //       author: author,
  //       createdAt: new Date().getTime(),
  //     },
  //   ]);
  //   autoId++;
  //   return Board;
  // },
  // deleteBoard: function (boardId) {
  //   // 새로운 배열을만들자!
  //   // 인자로 받은 boardId가 없는
  //   // 1. Board 배열을 순회한다.
  //   // 2. 인자로 받은 boardId가 다른것만 모으자!
  //   // 3. 기존 배열이 boardId인지 확인
  //   // 4, boardId랑 기존 배열의 객체의 board.id가 다르면 삭제한다.
  //   Board = Board.filter((board) => {
  //     return board.id !== boardId;
  //   });
  //   return Board;
  // },
  // editBoard: function (boardId, title, content, author) {
  //   Board = Board.map((board) => {
  //     if (board.id === boardId) {
  //       return {
  //         ...board,
  //         title: title,
  //         content: content,
  //         author: author,
  //       };
  //     }
  //     return board;
  //   });
  // },
  createBoard: async function (title, content, author) {
    const query = "INSERT INTO board (title, content) VALUES(?,?)";
    const [result, fields] = await pool.query(query, [title, content]);

    // Board = Board.concat([
    //   {
    //     id: autoId,
    //     title: title,
    //     content: content,
    //     author: author,
    //     createdAt: new Date().getTime(),
    //   },
    // ]);
    // autoId++;
    return [result, fields];
  },
  deleteBoard: async function (boardid) {
    const query = "DELETE FROM board WHERE id = ?";
    const [result, fields] = await pool.query(query, [boardId]);
    return [result, fields];
  },
  editBoard: async function (boardId, title, content, author) {
    const query = "UPDATE board SET title=?, content=? WHERE id =?";

    const [result, fields] = await pool.query(query, [title, content, boardId]);
    return [result, fields];
  },
};
