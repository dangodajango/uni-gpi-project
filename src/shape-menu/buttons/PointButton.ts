import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class PointButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('POINT', this.createPoint.bind(this));
    }

    private createPoint() {
        const line = this.canvas.svgContainer
            .circle(2).fill('black');
        this.canvas.storeShape(line);
    }
}
