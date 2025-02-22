import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';
import { Point } from '../../shape/Point';

export class PointButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('POINT', this.createPoint.bind(this));
    }

    private createPoint() {
        const point = new Point(this.canvas.svgContainer);
        this.canvas.storeShape(point);
    }
}
