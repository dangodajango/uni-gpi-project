import { Canvas } from '../../canvas/Canvas';
import { Element, SVG } from '@svgdotjs/svg.js';
import { Shape } from '../../shape/Shape';
import { Rectangle } from '../../shape/Rectangle';
import { Ellipse } from '../../shape/Ellipse';
import { Triangle } from '../../shape/Triangle';
import { Point } from '../../shape/Point';
import { Line } from '../../shape/Line';

export class ImportService {
    private readonly missMatchProperties = new Map<string, string>([
        ['id', 'name'],
        ['fill', 'fillColor'],
        ['fill-opacity', 'fillOpacity'],
        ['stroke', 'strokeColor'],
        ['stroke-width', 'strokeWidth'],
        ['stroke-opacity', 'strokeOpacity'],
    ]);

    constructor(private readonly canvas: Canvas) {}

    importSvg(svg: string) {
        const importedSvg = SVG(svg);
        importedSvg.children().forEach((element) => this.importElement(element));
    }

    importElement(element: Element) {
        const shape: Shape | null = this.mapToShape(element.type);
        if (shape) {
            this.migrateShapeProperties(shape, element);
            this.canvas.storeShape(shape);
        } else {
            console.warn(`Unrecognised shape type ${element.type}`);
        }
    }

    private mapToShape(elementType: string): Shape | null {
        switch (elementType) {
            case 'rect':
                return new Rectangle(this.canvas.svgContainer);
            case 'ellipse':
                return new Ellipse(this.canvas.svgContainer);
            case 'circle':
                return new Point(this.canvas.svgContainer);
            case 'line':
                return new Line(this.canvas.svgContainer);
            case 'polygon':
                return new Triangle(this.canvas.svgContainer);
            default:
                return null;
        }
    }

    migrateShapeProperties(shape: Shape, element: Element) {
        const shapeProperties = shape.properties;
        const elementAttributes = element.attr();
        for (const property in elementAttributes) {
            if (property === 'transform') {
                shape.transform = element.transform();
                continue;
            }

            const missMatchProperty = this.missMatchProperties.get(property);
            if (missMatchProperty) {
                shapeProperties[missMatchProperty].setProperty(elementAttributes[property]);
                continue;
            }

            if (shapeProperties[property]) {
                shapeProperties[property].setProperty(elementAttributes[property]);
            }
        }
    }
}
