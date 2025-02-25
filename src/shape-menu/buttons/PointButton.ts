import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Point } from '../../shape/Point';

export class PointButton extends GenericButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('POINT', this.createPoint.bind(this));
    }

    private createPoint() {
        const point = new Point(this.canvas.svgContainer);
        this.canvas.storeShape(point);
    }
}
