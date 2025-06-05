import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Circle } from '../../shape/Circle';

export class CircleButton extends GenericButton implements ButtonBuilder {
    buildButton() {
        return super.createButton('Shape', this.createLine.bind(this));
    }

    private createLine() {
        const line = new Circle(this.canvas.svgContainer);
        this.canvas.storeShape(line);
    }
}
// <!--0-->
// d="M60 160 140 260M140 260 220 160 60 160 140 215 220 160 140 215 140 260"

// <!--1-->
// d="M50 72 50 138 146 136 146 72 50 72 50 106 102 106 146 72 102 106 146 136"
//
// <!--2-->
// d="M150 100m-50 0a50 50 0 10100 0 50 50 0 10-100 0L100 48 100 152M200 100 198 47 202 153M100 100 200 100"
//
// <!--3-->
// d="M158 108m-50 0a50 50 0 10100 0 50 50 0 10-100 0M191 71 110 96M208 114 123 144"
//
// <!--4-->
// d="M50 72 50 138 146 136 146 72 50 72 50 138 146 72 146 136M50 72 146 136"
//
// <!--5-->
// d="M158 108m-50 0a50 50 0 10100 0 50 50 0 10-100 0M122 73 122 143M158 108 157 58 159 158M192 71 192 145M208 108 108 108"
//
// <!--6-->
// d="M50 72 67 137 123 137 146 72 50 72M67 137 102 99 102 72M102 99 136 99"
//
// <!--7-->
// d="M158 108m-50 0a50 50 0 10100 0 50 50 0 10-100 0M158 108 157 58 159 158M208 108 208 108M197 76 119 139M120 75 197 140"
//
// <!--8-->
// d="M100 50 161 101 103 151 45 100ZM45 100 161 101M100 50 100 101"

// <!--9-->
// d="M158 108m-50 0a50 50 0 10100 0 50 50 0 10-100 0M208 108 208 108M197 76 119 139M120 75 197 140"
