import { ShapeMenu } from './ShapeMenu';
import { Canvas } from '../canvas/Canvas';
import { RectangleButton } from './buttons/RectangleButton';
import { LineButton } from './buttons/LineButton';
import { EllipseButton } from './buttons/EllipseButton';
import { PointButton } from './buttons/PointButton';
import { TriangleButton } from './buttons/TriangleButton';

export class DefaultShapeMenu extends ShapeMenu {
    constructor(canvas: Canvas) {
        super(
            new RectangleButton(canvas),
            new LineButton(canvas),
            new EllipseButton(canvas),
            new PointButton(canvas),
            new TriangleButton(canvas)
        );
    }
}
