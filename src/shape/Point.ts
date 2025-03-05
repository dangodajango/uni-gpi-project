import { Fill, Property, Shape, Stroke } from './Shape';
import { Circle, Svg } from '@svgdotjs/svg.js';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Point extends Shape {
    constructor(
        svgContainer: Svg,
        stroke?: Stroke,
        fill: Fill = { color: 'black', opacity: 1 },
        name: string = `point-${generateRandomIdentifier()}`
    ) {
        super(svgContainer, name, stroke, fill);
        this.shape = this.svgContainer.circle(5).fill({ ...this.fill });
        this.shape.id(this.name);
    }

    protected createCloneObject(): Shape {
        return new Point(this.svgContainer, this.stroke, this.fill, this.name);
    }

    get properties(): Property {
        return { ...this.cx, ...this.cy, ...this.r, ...super.properties };
    }

    private get cx(): Property {
        const point = this.shape as Circle;
        return {
            cx: {
                getProperty: () => point.cx(),
                setProperty: (cx: string) => point.cx(Number(cx)),
                type: 'number',
            },
        };
    }

    private get cy(): Property {
        const point = this.shape as Circle;
        return {
            cy: {
                getProperty: () => point.cy(),
                setProperty: (cy: string) => point.cy(Number(cy)),
                type: 'number',
            },
        };
    }

    private get r(): Property {
        const point = this.shape as Circle;
        return {
            r: {
                getProperty: () => point.rx(),
                setProperty: (r: string) => point.radius(Number(r)),
                type: 'number',
            },
        };
    }
}
