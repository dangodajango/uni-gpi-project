import { Shape, Svg, SVG } from '@svgdotjs/svg.js';

export class Canvas {
    svgContainer: Svg;
    private readonly shapes: Shape[] = [];

    constructor(size: CanvasSize) {
        this.svgContainer = SVG()
            .size(size.width, size.height)
            .fill('white')
            .stroke({ width: 1, color: 'black' });
    }

    storeShape(shape: Shape) {
        this.shapes.push(shape);
    }

    buildCanvas() {
        const canvas = document.createElement('div');
        canvas.setAttribute('id', 'canvas-1');
        this.svgContainer.addTo(canvas);
        return canvas;
    }
}

export type CanvasSize = {
    width: number;
    height: number;
};
