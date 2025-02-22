import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';
import { Triangle } from '../../shape/Triangle';

export class TriangleButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('TRIANGLE', this.createTriangle.bind(this));
    }

    private createTriangle() {
        const triangle = new Triangle(this.canvas.svgContainer);
        this.canvas.storeShape(triangle);
    }
}
