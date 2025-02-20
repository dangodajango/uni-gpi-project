import { ShapeButton } from './ShapeButton';

export class LineButton extends ShapeButton {
    public createButton(): HTMLButtonElement {
        return super.createButton('LINE', this.createLine.bind(this));
    }

    private createLine(): void {
        const line = this.canvas.svgContainer.line(50, 50, 100, 100).stroke({
            width: 2,
            color: 'black',
        });
        this.canvas.storeShape(line);
    }
}
