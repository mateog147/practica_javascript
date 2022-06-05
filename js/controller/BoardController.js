import { board } from "../model/Board.js"
import { BoardView } from "../view/BoardView.js";
import { Bar } from "../model/Bar.js";

export const loadView = () =>{
    let newBoard = new board(800,400);
    let bar1 = new Bar(20,10,40,100,newBoard);
    let bar2 = new Bar(20,10,40,100,newBoard);
    let canvas = document.getElementById("canvas");
    let view = new BoardView(canvas,newBoard);
    console.log("creado")
    view.render()
}