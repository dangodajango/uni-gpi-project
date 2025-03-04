import { Shape } from '../../shape/Shape';
import { ShapeDetailsSection } from '../../shape-details/ShapeDetailsSection';

export class SelectService {
    constructor(private readonly shapeDetailsSection: ShapeDetailsSection) {}

    private currentlySelectedShapes: Shape[] = [];

    /**
     * If shift key is pressed, it means - multiple shapes will be selected.
     * If shift key is not pressed, it means - only a single shape will be selected.
     */
    configureEventListener(shape: Shape) {
        return (event: Event) => {
            if (event instanceof MouseEvent) {
                if (event.shiftKey) {
                    this.selectShapes(shape);
                } else {
                    this.currentlySelectedShapes = [];
                    this.selectShapes(shape);
                }
                this.shapeDetailsSection.updateSection(this.currentlySelectedShapes);
            }
        };
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

    clear() {
        this.currentlySelectedShapes = [];
    }
}
