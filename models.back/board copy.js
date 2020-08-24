let Board = [
  {
    id: 1,
    title: "게시글1",
    content: "내용1",
    author: "김현수",
    createdAt: "2020-08-19 12:00:00",
  },
  {
    id: 2,
    title: "게시글2",
    content: "내용2",
    author: "김현수",
    createdAt: "2020-08-19 12:00:00",
  },
  {
    id: 3,
    title: "게시글3",
    content: "내용3",
    author: "김현수",
    createdAt: "2020-08-19 12:00:00",
  },
];

let autoId = Board.length;

module.exports = {
  getBoardList: () => {
    return Board;
  },
  getBoardDetail: (boardId) => {
    let board = null;
    for (let _board of Board) {
      if (_board.id === boardId) {
        board = _board;
      }
    }
    return board;
  },
  createBoard: function (title, content, author) {
    Board = Board.concat([
      {
        id: autoId,
        title: title,
        content: content,
        author: author,
        createdAt: new Date().getTime(),
      },
    ]);
    autoId++;
    return Board;
  },
  deleteBoard: function (boardId) {
    // 새로운 배열을만들자!
    // 인자로 받은 boardId가 없는
    // 1. Board 배열을 순회한다.
    // 2. 인자로 받은 boardId가 다른것만 모으자!
    // 3. 기존 배열이 boardId인지 확인
    // 4, boardId랑 기존 배열의 객체의 board.id가 다르면 삭제한다.
    Board = Board.filter((board) => boardId !== board.id);
    // const result = 10;
    // console.log(result);
  },

  editBoard: function (boardId, title, content, author) {
    newBoard = Board.map((elem) => {
      if (elem.id === boardId) {
        board.title = title;
        board.content = content;
        board.author = author;
      }
      return elem;
    });

    return Board;
  },
  // 나중에 다시 확인
  // deleteBoard: function (boardId) {
  //   Board = Board.filter((board) => {
  //     return board.id;
  //   });
  // },

  editBoard: function (boardId, title, content, author) {
    Board = Board.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          title: title,
          content: content,
          author: author,
        };
      }
      return board;
    });
  },
};
