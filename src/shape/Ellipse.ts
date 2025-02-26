import { Ellipse as SvgEllipse, Svg } from '@svgdotjs/svg.js';
import { Fill, Property, Shape, Stroke } from './Shape';
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

    get properties(): Property {
        const ellipse = this.shape as SvgEllipse;
        return { ...super.properties };
        // return {
        //     width: ellipse.width(),
        //     height: ellipse.height(),
        //     rx: ellipse.rx(),
        //     ry: ellipse.ry(),
        // };
    }

    set properties(properties: { [key: string]: any }) {}
}
