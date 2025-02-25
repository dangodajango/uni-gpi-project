import { Canvas } from './canvas/Canvas';
import { DefaultShapeMenu } from './shape-menu/DefaultShapeMenu';
import { DefaultOperationMenu } from './operations-menu/DefaultOperationMenu';

const body = document.querySelector('body')!;

const canvasSection = document.createElement('div');

const canvas = new Canvas({ width: 500, height: 500 });
canvasSection.append(canvas.buildCanvas());

const shapeMenu = new DefaultShapeMenu(canvas);
canvasSection.append(shapeMenu.buildMenu());

const operationMenu = new DefaultOperationMenu(canvas);
canvasSection.append(operationMenu.buildMenu());

body.append(canvasSection);

class Test {
    setup() {}
}
