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
        return { ...this.radiusX, ...this.radiusY, ...super.properties };
    }

    get radiusX(): Property {
        const ellipse = this.shape as SvgEllipse;
        return {
            radiusX: {
                getProperty: () => ellipse.attr('rx'),
                setProperty: (radiusX: string) => {
                    const radiusY = ellipse.attr('ry');
                    ellipse.radius(Number(radiusX), Number(radiusY));
                },
                type: 'number',
            },
        };
    }

    get radiusY(): Property {
        const ellipse = this.shape as SvgEllipse;
        return {
            radiusY: {
                getProperty: () => ellipse.attr('ry'),
                setProperty: (radiusY: string) => {
                    const radiusX = ellipse.attr('rx');
                    ellipse.radius(Number(radiusX), Number(radiusY));
                },
                type: 'number',
            },
        };
    }
}
