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
        this.check_collisions();
        this.render();
        
    }
}

check_collisions = () =>{
    for(let i = this.board.bars.length -1; i>=0;i--){
        let bar = this.board.bars[i];
        if(hit(bar, this.board.ball)){
            this.board.ball.collision(bar);
        }
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

function hit(a,b){
//Revisa si a colisiona con b
var hit = false;
//Colisiones hirizontales
if(b.x + b.width >= a.x && b.x < a.x + a.width){

 //Colisiona verticales
 if (b.y + b.height >= a.y && b.y < a.y + a.height) 
  hit = true;
}

//Colisión de a con b
if(b.x <= a.x && b.x + b.width >= a.x + a.width){
 
 if (b.y <= a.y && b.y + b.height >= a.y + a.height) 
  hit = true;
}

//Colision b con a
if(a.x <= b.x && a.x + a.width >= b.x + b.width){
 //Colisiona verticales
 if (a.y <= b.y && a.y + a.height >= b.y + b.height) 
  hit = true;
}
return hit;
}



