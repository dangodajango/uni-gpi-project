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
        return { ...this.rx, ...this.ry, ...this.cx, ...this.cy, ...super.properties };
    }

    get rx(): Property {
        const ellipse = this.shape as SvgEllipse;
        return {
            rx: {
                getProperty: () => ellipse.attr('rx'),
                setProperty: (rx: string) => {
                    const ry = ellipse.attr('ry');
                    ellipse.radius(Number(rx), Number(ry));
                },
                type: 'number',
            },
        };
    }

    get ry(): Property {
        const ellipse = this.shape as SvgEllipse;
        return {
            ry: {
                getProperty: () => ellipse.attr('ry'),
                setProperty: (ry: string) => {
                    const rx = ellipse.attr('rx');
                    ellipse.radius(Number(rx), Number(ry));
                },
                type: 'number',
            },
        };
    }

    get cx(): Property {
        const ellipse = this.shape as SvgEllipse;
        return {
            cx: {
                getProperty: () => ellipse.attr('cx'),
                setProperty: (cx: string) => ellipse.cx(Number(cx)),
                type: 'number',
            },
        };
    }

    get cy(): Property {
        const ellipse = this.shape as SvgEllipse;
        return {
            cy: {
                getProperty: () => ellipse.attr('cy'),
                setProperty: (cy: string) => ellipse.cy(Number(cy)),
                type: 'number',
            },
        };
    }
}
