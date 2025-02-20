import { ShapeButton } from './ShapeButton';

export class RectangleButton extends ShapeButton {
    public createButton(): HTMLButtonElement {
        return super.createButton('RECTANGLE', this.createRectangle.bind(this));
    }

    private createRectangle(): void {
        const rectangle = this.canvas.svgContainer.rect(100, 50);
        this.canvas.storeShape(rectangle);
    }
}
