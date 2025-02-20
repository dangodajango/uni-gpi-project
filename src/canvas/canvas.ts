import { Shape, SVG, Svg } from '@svgdotjs/svg.js';

export class Canvas {
    readonly svgContainer: Svg;
    private readonly shapes: Shape[] = [];

    constructor(size: CanvasSize, htmlElement: HTMLElement) {
        this.svgContainer = SVG()
            .addTo(htmlElement)
            .size(size.width, size.height);
    }

    storeShape(shape: Shape) {
        this.shapes.push(shape);
    }
}

export type CanvasSize = {
    width: number;
    height: number;
};
