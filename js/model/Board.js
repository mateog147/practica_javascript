export class board {
    constructor (width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null
    }

    getElements = ()=>{
        let elements = this.bars.map((e)=>e);
        elements.push(this.ball)
        return elements
    }

}