import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class TriangleButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('TRIANGLE', this.createTriangle.bind(this));
    }

    private createTriangle() {
        const triangle = this.canvas.svgContainer.polygon(
            '50,50 150,50 100,150'
        );
        this.canvas.storeShape(triangle);
    }
}
