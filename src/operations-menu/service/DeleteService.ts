import { SelectService } from './SelectService';
import { Canvas } from '../../canvas/Canvas';

export class DeleteService {
    constructor(
        private readonly canvas: Canvas,
        private readonly selectService: SelectService
    ) {}

    delete() {
        this.selectService.selectedShapes.forEach((shape) => this.canvas.removeShape(shape));
        this.selectService.clear();
    }
}
