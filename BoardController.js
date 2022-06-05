import { board } from "./Board.js"
import { BoardView } from "./BoardView.js";

export const loadView = () =>{
    let newBoard = new board(800,800);
    let canvas = document.getElementById("canvas");
    let view = new BoardView(canvas,newBoard);
    console.log("creado")
}