import { Fill, Shape, Stroke } from './Shape';
import { Svg } from '@svgdotjs/svg.js';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Circle extends Shape {
    constructor(
        svgContainer: Svg,
        stroke?: Stroke,
        fill?: Fill,
        name: string = `triangle-${generateRandomIdentifier()}`
    ) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer
            .path('M60 160 140 260M140 260 220 160 60 160 140 215 220 160 140 215 140 260')
            .stroke({ ...this.stroke });
        this.shape.id(this.name);
    }
}
