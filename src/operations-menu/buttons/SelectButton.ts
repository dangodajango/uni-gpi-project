import { ButtonBuilder } from '../../common/ButtonBuilder';
import { SelectService } from '../service/SelectService';
import { GenericButton } from '../../common/GenericButton';

export class SelectButton extends GenericButton implements ButtonBuilder {
    private readonly selectService: SelectService =
        new SelectService();

    private isSelectingEnabled: boolean = false;

    buildButton(): HTMLButtonElement {
        return super.createButton('SELECT', this.enableSelectAction.bind(this));
    }

    enableSelectAction() {
        if (!this.isSelectingEnabled) {
            this.canvas.shapes.forEach((shape) =>
                this.selectService.configureEventListener(shape)
            );
            this.isSelectingEnabled = true;
        } else {
            this.canvas.shapes.forEach((shape) => shape.removeEventListener());
            this.isSelectingEnabled = false;
        }
    }
}
