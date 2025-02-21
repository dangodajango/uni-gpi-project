import { Canvas } from './canvas/Canvas';
import { DefaultShapeMenu } from './shape-menu/DefaultShapeMenu';

const body = document.querySelector('body')!;

const canvas = new Canvas({ width: 500, height: 500 });
body.append(canvas.buildCanvas());

const shapeMenu = new DefaultShapeMenu(canvas);
body.append(shapeMenu.buildShapeMenu());
