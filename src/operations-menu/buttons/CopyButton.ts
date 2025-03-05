import { Canvas } from '../../canvas/Canvas';
import { SelectService } from '../service/SelectService';
import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { CopyService } from '../service/CopyService';

export class CopyButton extends GenericButton implements ButtonBuilder {
    private readonly copyService: CopyService;

    constructor(canvas: Canvas, selectService: SelectService) {
        super(canvas);
        this.copyService = new CopyService(canvas, selectService);
    }

    buildButton(): HTMLButtonElement {
        return super.createButton('COPY', this.delete.bind(this));
    }

    private delete() {
        this.copyService.copy();
    }

}
