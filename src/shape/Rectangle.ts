import { Rect, Svg } from '@svgdotjs/svg.js';
import { Fill, Property, Shape, Stroke } from './Shape';
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

    get properties(): Property {
        return { ...this.width, ...this.height, ...super.properties };
    }

    private get width(): Property {
        const rect = this.shape as Rect;
        return {
            width: {
                getProperty: () => rect.width(),
                setProperty: (width: string) => rect.width(Number(width)),
                type: 'number',
            },
        };
    }

    private get height(): Property {
        const rect = this.shape as Rect;
        return {
            height: {
                getProperty: () => rect.height(),
                setProperty: (height: string) => rect.height(Number(height)),
                type: 'number',
            },
        };
    }
}
