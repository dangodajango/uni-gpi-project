import { Canvas } from '../../canvas/Canvas';
import { SelectService } from './SelectService';

export class CopyService {
    constructor(
        private readonly canvas: Canvas,
        private readonly selectService: SelectService
    ) {}

    copy() {
        this.selectService.selectedShapes.forEach((shape) => {
            const clonedShape = shape.clone();
            const eventListener = this.selectService.configureEventListener(clonedShape);
            clonedShape.addEventListener('click', eventListener.bind(this.selectService));
            this.canvas.storeShape(clonedShape);
        });
    }
}
