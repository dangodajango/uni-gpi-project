import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';
import { Line } from '../../shape/Line';

export class LineButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('LINE', this.createLine.bind(this));
    }

    private createLine() {
        const line = new Line(this.canvas.svgContainer);
        this.canvas.storeShape(line);
    }
}
