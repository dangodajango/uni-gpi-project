import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class EllipseButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('ELLIPSE', this.createEllipse.bind(this));
    }

    private createEllipse() {
        const ellipse = this.canvas.svgContainer.ellipse(50, 80);
        this.canvas.storeShape(ellipse);
    }
}
