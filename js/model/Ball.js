export class Ball{
    constructor(x,y,radius,board){
        this.x=x;
        this.y=y
        this.radius=radius;
        this.board=board;
        this.speed_x = 3;
        this.speed_y = 0;
        this.speed = 3
        this.kind = "circle";
        this.direction = 1;
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI /12;
        this.board.ball =this;
    }

    move = () =>{
        this.x +=(this.speed_x*this.direction);
        this.y +=(this.speed_y*this.direction);
    }

    collision = (bar) =>{
         //Reacciona a la colisiona con una barra que recibe como parametro  
    var relative_intersect_y = ( bar.y + (bar.height / 2) ) - this.y;

    var normalized_intersect_y = relative_intersect_y / (bar.height / 2);

    this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

    this.speed_y = this.speed * -Math.sin(this.bounce_angle);
    this.speed_x = this.speed * Math.cos(this.bounce_angle);

    if (this.x > (this.board.width / 2)) this.direction = -1;
    else this.direction = 1;
    }

    get width(){
        return this.radius;
    }

    get height(){
        return this.radius;
    }
}