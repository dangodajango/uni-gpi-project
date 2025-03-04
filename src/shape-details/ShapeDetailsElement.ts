import { Shape } from '../shape/Shape';

export class ShapeDetailsElement {
    readonly id: string;
    private isCollapsed = false;

    constructor(private readonly shape: Shape) {
        this.id = shape.name;
    }

    buildShapeDetailsElement() {
        const li = document.createElement('li');
        const title = document.createElement('span');
        title.textContent = this.shape.name;
        title.addEventListener('click', () => {
            if (!this.isCollapsed) {
                li.append(this.buildShapePropertiesList());
                this.isCollapsed = true;
            } else {
                li.replaceChildren();
                li.append(title);
                this.isCollapsed = false;
            }
        });
        li.append(title);
        return li;
    }

    private buildShapePropertiesList() {
        const ul = document.createElement('ul');
        for (const property in this.shape.properties) {
            const propertyAccessors = this.shape.properties[property];

            const li = document.createElement('li');

            const input = document.createElement('input');
            input.id = `${property}-${this.shape.name}`;
            input.type = propertyAccessors.type;
            input.addEventListener('change', (event) => {
                const target = event.target as HTMLInputElement;
                propertyAccessors.setProperty(target.value);
                label.textContent = `${property}: ${propertyAccessors.getProperty()}`;
            });

            const label = document.createElement('label');
            label.textContent = `${property}: ${propertyAccessors.getProperty()}`;
            label.setAttribute('for', input.id);

            li.append(label, input);
            ul.append(li);
        }
        return ul;
    }
}
