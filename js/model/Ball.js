export class Ball{
    constructor(x,y,radius,board){
        this.x=x;
        this.y=y
        this.radius=radius;
        this.board=board;
        this.speed = 10;
        this.kind = "circle"

        this.board.ball =this;
        
    }
}