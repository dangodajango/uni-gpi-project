import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Canvas } from '../../canvas/Canvas';
import { SelectService } from '../service/SelectService';
import { DeleteService } from '../service/DeleteService';

export class DeleteButton extends GenericButton implements ButtonBuilder {
    private readonly deleteService: DeleteService;

    constructor(canvas: Canvas, selectService: SelectService) {
        super(canvas);
        this.deleteService = new DeleteService(canvas, selectService);
    }

    buildButton(): HTMLButtonElement {
        return super.createButton('DELETE', this.delete.bind(this));
    }

    private delete() {
        this.deleteService.delete();
    }
}
