import { ShapeButton } from './ShapeButton';
import { ButtonBuilder } from './ButtonBuilder';

export class LineButton extends ShapeButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('LINE', this.createLine.bind(this));
    }

    private createLine() {
        const line = this.canvas.svgContainer.line(50, 50, 100, 100);
        this.canvas.storeShape(line);
    }
}
