import { DrawingBoard } from './drawing-board/DrawingBoard';

const body = document.querySelector('body')!;
const drawingBoard = new DrawingBoard();
body.append(drawingBoard.buildDrawingBoard());
