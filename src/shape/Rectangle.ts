import { Svg } from '@svgdotjs/svg.js';
import { Fill, Shape, Stroke } from './Shape';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Rectangle extends Shape {
    constructor(
        svgContainer: Svg,
        stroke?: Stroke,
        fill?: Fill,
        name: string = `rectangle-${generateRandomIdentifier()}`
    ) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer
            .rect(100, 50)
            .stroke({ ...this.stroke })
            .fill({ ...this.fill });
        this.shape.id(this.name);
    }
}
