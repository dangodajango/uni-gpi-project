import { Canvas } from '../canvas/Canvas';
import { DefaultShapeMenu } from '../shape-menu/DefaultShapeMenu';
import { ShapeDetailsSection } from '../shape-details/ShapeDetailsSection';
import { DefaultOperationMenu } from '../operations-menu/DefaultOperationMenu';

/**
 * A drawing board serves as a wrapper for all the components that enable drawing on the screen - including the canvas, menus, and information displays.
 * Each instance of the drawing board class generates a new section containing these elements, allowing multiple drawings to be worked on simultaneously within the same tab.
 */
export class DrawingBoard {
    buildDrawingBoard() {
        const drawingBoard = document.createElement('div');
        drawingBoard.classList.add('drawing-board');

        const canvas = new Canvas();
        drawingBoard.append(canvas.buildCanvas());

        const shapeMenu = new DefaultShapeMenu(canvas);
        drawingBoard.append(shapeMenu.buildMenu());

        const shapeDetailsSection = new ShapeDetailsSection();
        drawingBoard.append(shapeDetailsSection.buildShapeDetailsSection());

        const operationMenu = new DefaultOperationMenu(canvas, shapeDetailsSection);
        drawingBoard.append(operationMenu.buildMenu());

        return drawingBoard;
    }
}
