export class BoardView{
constructor(canvas, board){
    this.canvas = canvas;
    this.board = board;
    this.board.width = this.canvas.width;
    this.board.heigth = this.canvas.heigth,
    this.context = canvas.getContext("2d")
}

render = () =>{
    console.log("render")
    for(let i = this.board.getElements.lenght -1; i >=0; i--){
        let element = this.board.elements[i];
        draw(this.context,element)
        console.log(i)
    }
}
}

function draw(ctx, element) {
    switch (element.kind) {
        case "rectagle":
            ctx.fillRect(element.x, element.y, element.width, element.heigt);
            break;
    }
}

