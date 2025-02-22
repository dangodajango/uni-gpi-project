import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';
import { Rectangle } from '../../shape/Rectangle';

export class RectangleButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('RECTANGLE', this.createRectangle.bind(this));
    }

    private createRectangle() {
        const rectangle = new Rectangle(this.canvas.svgContainer);
        this.canvas.storeShape(rectangle);
    }
}
