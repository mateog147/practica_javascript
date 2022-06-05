export class BoardView{
constructor(canvas, board){
    this.canvas = canvas;
    this.board = board;
    this.canvas.width =this.board.width;
    this.canvas.height=this.board.height,
    this.context = canvas.getContext("2d")
}

render = () =>{
    
    for(let i = this.board.getElements().length-1; i >=0; i--){
        let element = this.board.getElements()[i];
        draw(this.context,element)
    }

}

clean = () =>{
    this.context.clearRect(0,0,this.board.width,this.board.height)
}

play = () =>{
    if(this.board.playing){
        this.board.ball.move();
        this.clean();
        this.render();
        
    }
}
}

function draw(ctx, element) {
    switch (element.kind) {
        case "rectangle":
            ctx.fillRect(element.x, element.y, element.width, element.height);
            break;

        case "circle":
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.radius, 0,7);
            ctx.closePath();
            ctx.fill()
            break;
    }
}



