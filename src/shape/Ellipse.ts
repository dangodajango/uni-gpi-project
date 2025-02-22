import { Svg } from '@svgdotjs/svg.js';
import { Fill, Shape, Stroke } from './Shape';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Ellipse extends Shape {
    constructor(
        svgContainer: Svg,
        stroke?: Stroke,
        fill?: Fill,
        name: string = `ellipse-${generateRandomIdentifier()}`
    ) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer
            .ellipse(50, 80)
            .stroke({ ...this.stroke })
            .fill({ ...this.fill });
        this.shape.id(this.name);
    }
}
