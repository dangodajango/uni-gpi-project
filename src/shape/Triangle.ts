import { Fill, Shape, Stroke } from './Shape';
import { Svg } from '@svgdotjs/svg.js';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Triangle extends Shape {
    constructor(
        svgContainer: Svg,
        stroke?: Stroke,
        fill?: Fill,
        name: string = `triangle-${generateRandomIdentifier()}`
    ) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer
            .polygon('50,50 150,50 100,150')
            .stroke({ ...this.stroke })
            .fill({ ...this.fill });
        this.shape.id(this.name);
    }

    protected createCloneObject(): Shape {
        return new Triangle(this.svgContainer, this.stroke, this.fill, this.name);
    }
}
