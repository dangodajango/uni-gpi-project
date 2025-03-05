import { Svg, SVG } from '@svgdotjs/svg.js';
import { Shape } from '../shape/Shape';

export class Canvas {
    readonly svgContainer: Svg;

    readonly shapes: Shape[] = [];

    constructor() {
        this.svgContainer = SVG().fill('white');
    }

    buildCanvas() {
        const canvas = document.createElement('div');
        canvas.classList.add('canvas');
        this.svgContainer.addTo(canvas);
        document.addEventListener('DOMContentLoaded', () => {
            this.svgContainer.size(canvas.clientWidth, canvas.clientHeight);
        });
        return canvas;
    }

    storeShape(shape: Shape) {
        this.shapes.push(shape);
    }

    removeShape(shape: Shape) {
        const index = this.shapes.indexOf(shape);
        if (index !== -1) {
            this.shapes.splice(index, 1);
            this.svgContainer.removeElement(shape.shape!);
        }
    }
}
