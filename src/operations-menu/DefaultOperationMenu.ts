import { Menu } from '../common/Menu';
import { Canvas } from '../canvas/Canvas';
import { SelectButton } from './buttons/SelectButton';
import { ShapeDetailsSection } from '../shape-details/ShapeDetailsSection';
import { DownloadButton } from './buttons/DownloadButton';

export class DefaultOperationMenu extends Menu {
    constructor(canvas: Canvas, shapeDetailsSection: ShapeDetailsSection) {
        super(new SelectButton(canvas, shapeDetailsSection), new DownloadButton(canvas));
    }

    buildMenu(): HTMLDivElement {
        const menu = super.buildMenu();
        menu.classList.add('operations-menu');
        return menu;
    }
}
