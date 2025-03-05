import { Fill, Property, Shape, Stroke } from './Shape';
import { Line as SvgLine, Svg } from '@svgdotjs/svg.js';
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

    get properties(): Property {
        return { ...this.x1, ...this.x2, ...this.y1, ...this.y2, ...super.properties };
    }

    private get x1(): Property {
        const line = this.shape as SvgLine;
        return {
            x1: {
                getProperty: () => line.attr('x1'),
                setProperty: (x1: string) => {
                    const { x2, y1, y2 } = line.attr();
                    line.plot(Number(x1), y1, x2, y2);
                },
                type: 'number',
            },
        };
    }

    private get x2(): Property {
        const line = this.shape as SvgLine;
        return {
            x2: {
                getProperty: () => line.attr('x2'),
                setProperty: (x2: string) => {
                    const { x1, y1, y2 } = line.attr();
                    line.plot(x1, y1, Number(x2), y2);
                },
                type: 'number',
            },
        };
    }

    private get y1(): Property {
        const line = this.shape as SvgLine;
        return {
            y1: {
                getProperty: () => line.attr('y1'),
                setProperty: (y1: string) => {
                    const { x1, x2, y2 } = line.attr();
                    line.plot(x1, Number(y1), x2, y2);
                },
                type: 'number',
            },
        };
    }

    private get y2(): Property {
        const line = this.shape as SvgLine;
        return {
            y2: {
                getProperty: () => line.attr('y2'),
                setProperty: (y2: string) => {
                    const { x1, x2, y1 } = line.attr();
                    line.plot(x1, y1, x2, Number(y2));
                },
                type: 'number',
            },
        };
    }
}
