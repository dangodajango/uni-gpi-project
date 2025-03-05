import { ButtonBuilder } from '../../common/ButtonBuilder';
import { SelectService } from '../service/SelectService';
import { GenericButton } from '../../common/GenericButton';
import { ShapeDetailsSection } from '../../shape-details/ShapeDetailsSection';
import { Canvas } from '../../canvas/Canvas';

export class SelectButton extends GenericButton implements ButtonBuilder {
    readonly selectService: SelectService;

    constructor(canvas: Canvas, shapeDetailsSection: ShapeDetailsSection) {
        super(canvas);
        this.selectService = new SelectService(shapeDetailsSection);
    }

    private isSelectingEnabled: boolean = false;

    buildButton(): HTMLButtonElement {
        return super.createButton('SELECT', this.enableSelectAction.bind(this));
    }

    enableSelectAction() {
        if (!this.isSelectingEnabled) {
            this.canvas.shapes.forEach((shape) =>
                shape.addEventListener('click', this.selectService.configureEventListener(shape))
            );
            this.isSelectingEnabled = true;
        } else {
            this.canvas.shapes.forEach((shape) => shape.removeEventListener('click'));
            this.selectService.clear();
            this.isSelectingEnabled = false;
        }
    }
}
