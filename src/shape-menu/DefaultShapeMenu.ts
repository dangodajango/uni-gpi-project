import { Canvas } from '../canvas/Canvas';
import { RectangleButton } from './buttons/RectangleButton';
import { LineButton } from './buttons/LineButton';
import { EllipseButton } from './buttons/EllipseButton';
import { PointButton } from './buttons/PointButton';
import { TriangleButton } from './buttons/TriangleButton';
import { Menu } from '../common/Menu';

export class DefaultShapeMenu extends Menu {
    constructor(canvas: Canvas) {
        super(
            new RectangleButton(canvas),
            new LineButton(canvas),
            new EllipseButton(canvas),
            new PointButton(canvas),
            new TriangleButton(canvas)
        );
    }

    buildMenu(): HTMLDivElement {
        const menu = super.buildMenu();
        menu.classList.add('shape-menu')
        return menu;
    }
}
