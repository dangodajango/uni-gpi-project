import { Svg, SVG } from '@svgdotjs/svg.js';
import { Shape } from '../shape/Shape';

export class Canvas {
    readonly svgContainer: Svg;

    readonly shapes: Shape[] = [];

    private currentlySelectedShapes: Shape[] = [];

    constructor(size: CanvasSize) {
        this.svgContainer = SVG().size(size.width, size.height).fill('white');
    }

    buildCanvas() {
        const canvas = document.createElement('div');
        canvas.setAttribute('id', 'canvas-1');
        this.svgContainer.addTo(canvas);
        return canvas;
    }

    storeShape(shape: Shape) {
        this.configureShapeEventListeners(shape);
        this.shapes.push(shape);
    }

    private configureShapeEventListeners(shape: Shape) {
        shape.addEventListener('click', (event) => {
            if (event instanceof MouseEvent) {
                if (event.shiftKey) {
                    this.selectShapes(shape);
                } else {
                    this.currentlySelectedShapes = [];
                    this.selectShapes(shape);
                }
            }
        });
    }

    private selectShapes(...shapes: Shape[]) {
        for (const shape of shapes) {
            const index = this.currentlySelectedShapes.indexOf(shape);
            if (index > -1) {
                this.currentlySelectedShapes.splice(index, 1);
            } else {
                this.currentlySelectedShapes.push(shape);
            }
        }
    }
}

export type CanvasSize = {
    width: number;
    height: number;
};
