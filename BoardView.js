export class BoardView{
constructor(canvas, board){
    this.canvas = canvas;
    this.board = board;
    this.board.width = this.canvas.width;
    this.board.heigth = this.canvas.heigth,
    this.context = canvas.getContext("2d")
}
}