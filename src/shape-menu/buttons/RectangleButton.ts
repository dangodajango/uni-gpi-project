import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class RectangleButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('RECTANGLE', this.createRectangle.bind(this));
    }

    private createRectangle(): void {
        const rectangle = this.canvas.svgContainer.rect(100, 50);
        this.canvas.storeShape(rectangle);
    }
}
