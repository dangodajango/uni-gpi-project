import { Shape as SvgShape, Svg } from '@svgdotjs/svg.js';
import { generateRandomIdentifier } from '../utils/RandomIdentifierGenerator';

export class Shape {
    protected static readonly DEFAULT_STROKE: Stroke = {
        width: 2,
        color: 'black',
        opacity: 1,
    };

    protected static readonly DEFAULT_FILL: Fill = {
        color: 'white',
        opacity: 1,
    };

    shape?: SvgShape;

    constructor(
        protected readonly svgContainer: Svg,
        public readonly name: string = `shape-${generateRandomIdentifier()}`,
        public readonly stroke: Stroke = Shape.DEFAULT_STROKE,
        public readonly fill: Fill = Shape.DEFAULT_FILL
    ) {}

    addEventListener(event: string, callback: (event: Event) => void) {
        if (this.shape) {
            this.shape.on(event, callback);
        }
    }

    removeEventListener() {
        if (this.shape) {
            this.shape.removeEventListener();
        }
    }

    get properties(): Property {
        return { ...this.x, ...this.y, ...this.rotate, ...this.scale, ...this.skew };
    }

    get x(): Property {
        const shape = this.shape!;
        return {
            x: {
                getProperty: () => shape.x(),
                setProperty: (x: string) => shape.move(Number(x), shape.y()),
                type: 'number',
            },
        };
    }

    get y(): Property {
        const shape = this.shape!;
        return {
            y: {
                getProperty: () => shape.y(),
                setProperty: (y: string) => shape.move(shape.x(), Number(y)),
                type: 'number',
            },
        };
    }

    private get scale(): Property {
        const shape = this.shape!;
        return {
            scale: {
                getProperty: () => shape.transform().scaleX,
                setProperty: (factor: string) => shape.scale(Number(factor)),
                type: 'number',
            },
        };
    }

    private get rotate(): Property {
        const shape = this.shape!;
        return {
            rotate: {
                getProperty: () => calculateCurrentRotation(shape),
                setProperty: (angle: string) => shape.rotate(Number(angle)),
                type: 'number',
            },
        };

        function calculateCurrentRotation(shape: SvgShape) {
            const transform = shape.transform();
            if (transform.b && transform.a) {
                const angle = Math.atan2(transform.b, transform.a) * (180 / Math.PI);
                return Math.round(angle) || 0;
            }
            return 0;
        }
    }

    private get skew(): Property {
        const shape = this.shape!;
        return {
            skew: {
                getProperty: () => calculateCurrentSkew(shape),
                setProperty: (angle: string) => {
                    shape.skew(Number(angle));
                },
                type: 'number',
            },
        };

        function calculateCurrentSkew(shape: SvgShape) {
            const transform = shape.transform();
            if (transform.b) {
                const skew = Math.atan(transform.b) * (180 / Math.PI);
                return Math.round(skew);
            }
            return 0;
        }
    }
}

export type Stroke = {
    width: number;
    color: string;
    opacity: number;
};

export type Fill = {
    color: string;
    opacity: number;
};

export type Property = {
    [key: string]: {
        getProperty: () => any;
        setProperty: (value: any) => void;
        type: string;
    };
};
