import { Fill, Shape, Stroke } from './Shape';
import { Svg } from '@svgdotjs/svg.js';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Point extends Shape {
    constructor(
        svgContainer: Svg,
        stroke?: Stroke,
        fill?: Fill,
        name: string = `point-${generateRandomIdentifier()}`
    ) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer.circle(2).fill({ ...this.fill });
        this.shape.id(this.name);
    }
}
