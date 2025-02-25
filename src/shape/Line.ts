import { Fill, Shape, Stroke } from './Shape';
import { Svg } from '@svgdotjs/svg.js';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Line extends Shape {
    constructor(svgContainer: Svg, stroke?: Stroke, fill?: Fill, name: string = `line-${generateRandomIdentifier()}`) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer
            .line(50, 50, 100, 100)
            .stroke({ ...this.stroke })
            .fill({ ...this.fill });
        this.shape.id(this.name);
    }
}
