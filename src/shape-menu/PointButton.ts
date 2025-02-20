import { ShapeButton } from './ShapeButton';

export class PointButton extends ShapeButton {
    public createButton(): HTMLButtonElement {
        return super.createButton('POINT', this.createPoint.bind(this));
    }

    private createPoint(): void {
        const line = this.canvas.svgContainer.circle(5).fill('black');
        this.canvas.storeShape(line);
    }
}
