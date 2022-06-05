export class Bar{
    constructor(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width =width;
        this.height = height;
        this.board= board;
        this.kind = "rectangle"
        this.board.bars.push(this)
    }

    down = () =>{

    }

    up = () =>{
        
    }
}