import { ShapeMenu } from './ShapeMenu';
import { Canvas } from '../canvas/Canvas';
import { RectangleButton } from './buttons/RectangleButton';
import { LineButton } from './buttons/LineButton';
import { EllipseButton } from './buttons/EllipseButton';
import { PointButton } from './buttons/PointButton';

export class DefaultShapeMenu extends ShapeMenu {
    constructor(canvas: Canvas) {
        super(
            new RectangleButton(canvas),
            new LineButton(canvas),
            new EllipseButton(canvas),
            new PointButton(canvas)
        );
    }
}
