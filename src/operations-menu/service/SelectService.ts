import { Shape } from '../../shape/Shape';

export class SelectService {
    private currentlySelectedShapes: Shape[] = [];

    configureEventListener(shape: Shape) {
        shape.addEventListener('click', (event) => {
            if (event instanceof MouseEvent) {
                if (event.shiftKey) {
                    this.selectShapes(shape);
                } else {
                    this.currentlySelectedShapes = [];
                    this.selectShapes(shape);
                }
            }
        });
    }

    /**
     * If the shape is already selected, it will be deselected.
     */
    private selectShapes(...shapes: Shape[]) {
        for (const shape of shapes) {
            const index = this.currentlySelectedShapes.indexOf(shape);
            if (index > -1) {
                this.currentlySelectedShapes.splice(index, 1);
            } else {
                this.currentlySelectedShapes.push(shape);
            }
        }
    }
}
