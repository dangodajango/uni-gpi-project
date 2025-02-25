import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Line } from '../../shape/Line';

export class LineButton extends GenericButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('LINE', this.createLine.bind(this));
    }

    private createLine() {
        const line = new Line(this.canvas.svgContainer);
        this.canvas.storeShape(line);
    }
}
