import { Canvas } from './canvas/canvas';
import { RectangleButton } from './shape-menu/RectangleButton';
import { LineButton } from './shape-menu/LineButton';
import { EllipseButton } from './shape-menu/EllipseButton';
import { PointButton } from './shape-menu/PointButton';

const canvas = document.getElementById('canvas');
const shapesMenu = document.getElementById('shapes-menu');

if (canvas && shapesMenu) {
    const canvasS = new Canvas({ width: 500, height: 500 }, canvas);
    const rectangleButton = new RectangleButton(canvasS);
    const lineButton = new LineButton(canvasS);
    const ellipseButton = new EllipseButton(canvasS);
    const pointButton = new PointButton(canvasS);
    shapesMenu.append(rectangleButton.createButton());
    shapesMenu.append(lineButton.createButton());
    shapesMenu.append(ellipseButton.createButton());
    shapesMenu.append(pointButton.createButton());
}
