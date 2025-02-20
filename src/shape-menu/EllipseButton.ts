import { ShapeButton } from './ShapeButton';

export class EllipseButton extends ShapeButton {
    public createButton(): HTMLButtonElement {
        return super.createButton('ELLIPSE', this.createEllipse.bind(this));
    }

    private createEllipse() {
        const ellipse = this.canvas.svgContainer.ellipse(50, 80);
        this.canvas.storeShape(ellipse);
    }
}
