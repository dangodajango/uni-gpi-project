import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Triangle } from '../../shape/Triangle';

export class TriangleButton extends GenericButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('TRIANGLE', this.createTriangle.bind(this));
    }

    private createTriangle() {
        const triangle = new Triangle(this.canvas.svgContainer);
        this.canvas.storeShape(triangle);
    }
}
