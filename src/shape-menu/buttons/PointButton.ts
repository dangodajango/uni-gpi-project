import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class PointButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('POINT', this.createPoint.bind(this));
    }

    private createPoint(): void {
        const line = this.canvas.svgContainer.circle(5).fill('black');
        this.canvas.storeShape(line);
    }
}
