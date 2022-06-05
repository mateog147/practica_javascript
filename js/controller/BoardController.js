import { board } from "../model/Board.js"
import { BoardView } from "../view/BoardView.js";
import { Bar } from "../model/Bar.js";

export const loadView = () =>{
    let newBoard = new board(800,400);
    let bar1 = new Bar(20,10,40,100,newBoard);
    let bar2 = new Bar(740,100,40,100,newBoard);
    let canvas = document.getElementById("canvas");
    let view = new BoardView(canvas,newBoard);
    view.render();

    document.addEventListener("keydown",function(ev){
        ev.preventDefault()
        switch (ev.key) {
            case "w":
                bar1.up();
                view.clean()
                window.requestAnimationFrame(view.render)
                break;

            case "s":
                bar1.down();
                view.clean()
                window.requestAnimationFrame(view.render)
                break;

            case "ArrowUp":
                bar2.up();
                view.clean()
                window.requestAnimationFrame(view.render)
                break;

            case "ArrowDown":
                bar2.down();
                view.clean()
                window.requestAnimationFrame(view.render)
                break;
        
            default:
                break;
        }
    })

    window.requestAnimationFrame(view.render)
}