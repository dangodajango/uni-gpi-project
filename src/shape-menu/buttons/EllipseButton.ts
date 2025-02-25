import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Ellipse } from '../../shape/Ellipse';

export class EllipseButton extends GenericButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('ELLIPSE', this.createEllipse.bind(this));
    }

    private createEllipse() {
        const ellipse = new Ellipse(this.canvas.svgContainer);
        this.canvas.storeShape(ellipse);
    }
}
