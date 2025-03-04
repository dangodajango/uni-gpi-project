import { Menu } from '../common/Menu';
import { Canvas } from '../canvas/Canvas';
import { SelectButton } from './buttons/SelectButton';
import { ShapeDetailsSection } from '../shape-details/ShapeDetailsSection';

export class DefaultOperationMenu extends Menu {
    constructor(canvas: Canvas, shapeDetailsSection: ShapeDetailsSection) {
        super(new SelectButton(canvas, shapeDetailsSection));
    }

    buildMenu(): HTMLDivElement {
        const menu = super.buildMenu();
        menu.classList.add('operations-menu');
        return menu;
    }
}
