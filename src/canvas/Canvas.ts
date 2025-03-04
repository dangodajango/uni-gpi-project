import { Svg, SVG } from '@svgdotjs/svg.js';
import { Shape } from '../shape/Shape';

export class Canvas {
    readonly svgContainer: Svg;

    readonly shapes: Shape[] = [];

    constructor(size: CanvasSize) {
        this.svgContainer = SVG().size(size.width, size.height).fill('white');
    }

    buildCanvas() {
        const canvas = document.createElement('div');
        canvas.classList.add('canvas');
        this.svgContainer.addTo(canvas);
        return canvas;
    }

    storeShape(shape: Shape) {
        this.shapes.push(shape);
    }
}

export type CanvasSize = {
    width: number;
    height: number;
};
