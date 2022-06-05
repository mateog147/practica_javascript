export class Ball{
    constructor(x,y,radius,board){
        this.x=x;
        this.y=y
        this.radius=radius;
        this.board=board;
        this.speed_x = 3;
        this.speed_y = 0;
        this.kind = "circle";
        this.direction = 1;
        this.board.ball =this;
    }

    move = () =>{
        this.x +=(this.speed_x*this.direction);
        this.y +=(this.speed_y*this.direction);
    }
}