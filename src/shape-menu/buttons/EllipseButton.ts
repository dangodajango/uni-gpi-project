import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';
import { Ellipse } from '../../shape/Ellipse';

export class EllipseButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('ELLIPSE', this.createEllipse.bind(this));
    }

    private createEllipse() {
        const ellipse = new Ellipse(this.canvas.svgContainer);
        this.canvas.storeShape(ellipse);
    }
}
