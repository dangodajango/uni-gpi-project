import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class RectangleButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('RECTANGLE', this.createRectangle.bind(this));
    }

    private createRectangle() {
        const rectangle = this.canvas.svgContainer.rect(100, 50);
        rectangle.on('click', (event) => console.log('clicked', event));
        this.canvas.storeShape(rectangle);
    }
}
