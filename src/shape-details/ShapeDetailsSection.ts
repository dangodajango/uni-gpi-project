import { Shape } from '../shape/Shape';
import { ShapeDetailsElement } from './ShapeDetailsElement';

export class ShapeDetailsSection {
    private shapeDetailsSection!: HTMLUListElement;
    private shapeDetailsElements: ShapeDetailsElement[] = [];

    buildShapeDetailsSection() {
        this.shapeDetailsSection = document.createElement('ul');
        this.shapeDetailsSection.classList.add('shape-details');
        return this.shapeDetailsSection;
    }

    updateSection(shapes: Shape[]) {
        const shapeDetailsElements: ShapeDetailsElement[] = [];
        for (const shape of shapes) {
            const shapeDetailsElement = this.shapeDetailsElements.find((element) => element.id === shape.name);
            if (shapeDetailsElement) {
                shapeDetailsElements.push(shapeDetailsElement);
            } else {
                shapeDetailsElements.push(new ShapeDetailsElement(shape));
            }
        }
        this.shapeDetailsElements = shapeDetailsElements;
        const updatedElements = shapeDetailsElements.map((element) => element.buildShapeDetailsElement());
        this.shapeDetailsSection.replaceChildren(...updatedElements);
    }

    clear() {
        this.shapeDetailsElements = [];
        this.shapeDetailsSection.replaceChildren();
    }
}
