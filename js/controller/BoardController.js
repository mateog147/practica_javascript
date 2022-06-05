import { board } from "../model/Board.js"
import { BoardView } from "../view/BoardView.js";
import { Bar } from "../model/Bar.js";
import { Ball } from "../model/Ball.js";

export const loadView = () =>{
    let newBoard = new board(800,400);
    let bar1 = new Bar(20,10,40,100,newBoard);
    let bar2 = new Bar(740,100,40,100,newBoard);
    let ball = new Ball(350, 100, 10, newBoard);
    let canvas = document.getElementById("canvas");
    let view = new BoardView(canvas,newBoard);
    view.render();
    
    document.addEventListener("keydown",function(ev){
        ev.preventDefault()
        switch (ev.key) {
            case "w":
                bar1.up();
                break;

            case "s":
                bar1.down();
                
                break;

            case "ArrowUp":
                bar2.up();
                
                break;

            case "ArrowDown":
                bar2.down();
                
                break;
            
            case " ":
                newBoard.playing=!newBoard.playing;
                
                break;
        
            default:
                break;
        }
    })

    const controller = () =>{
        view.play();
        window.requestAnimationFrame(controller);
    }

    window.requestAnimationFrame(controller)


}