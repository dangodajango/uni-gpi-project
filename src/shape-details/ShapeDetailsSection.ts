import { Shape } from '../shape/Shape';

export class ShapeDetailsSection {
    buildShapeDetails() {
        return document.createElement('div');
    }

    updateSection(shapes: Shape[]) {
        console.log('to be updaees', shapes);
    }
}
