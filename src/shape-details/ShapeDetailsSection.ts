import { Shape } from '../shape/Shape';

export class ShapeDetailsSection {
    private shapeDetailsSection!: HTMLUListElement;

    buildShapeDetailsSection() {
        this.shapeDetailsSection = document.createElement('ul');
        this.shapeDetailsSection.classList.add('shape-details');
        return this.shapeDetailsSection;
    }

    updateSection(shapes: Shape[]) {
        const updatedElements = shapes.map((shape) => this.createShapeDetailsDomElement(shape));
        this.shapeDetailsSection.replaceChildren(...updatedElements);
    }

    private createShapeDetailsDomElement(shape: Shape) {
        const li = document.createElement('li');
        for (const property in shape.properties) {
            const propertyAccessors = shape.properties[property];

            const div = document.createElement('div');
            const input = document.createElement('input');
            const label = document.createElement('label');
            label.textContent = `${property}: ${propertyAccessors.getProperty()}`;

            input.type = propertyAccessors.type;
            input.addEventListener('change', (event) => {
                const target = event.target as HTMLInputElement;
                propertyAccessors.setProperty(target.value);
                label.textContent = `${property}: ${propertyAccessors.getProperty()}`;
            });

            input.id = `${property}-${shape.name}`;
            label.setAttribute('for', input.id);

            div.append(label, input);
            li.append(div);
        }
        return li;
    }
}
