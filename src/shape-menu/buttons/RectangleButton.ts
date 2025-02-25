import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Rectangle } from '../../shape/Rectangle';

export class RectangleButton extends GenericButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('RECTANGLE', this.createRectangle.bind(this));
    }

    private createRectangle() {
        const rectangle = new Rectangle(this.canvas.svgContainer);
        this.canvas.storeShape(rectangle);
    }
}
