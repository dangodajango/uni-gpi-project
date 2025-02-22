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

    scale(factor: number) {
        if (this.shape) {
            this.shape.scale(factor);
        }
    }

    rotate(angle: number) {
        if (this.shape) {
            this.shape.rotate(angle);
        }
    }

    skew(angleX: number, angleY: number) {
        if (this.shape) {
            this.shape.skew(angleX, angleY);
        }
    }

    reset() {
        if (this.shape) {
            this.scale(1);
            this.rotate(0);
            this.skew(0, 0);
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
