import { Menu } from '../common/Menu';
import { Canvas } from '../canvas/Canvas';
import { SelectButton } from './buttons/SelectButton';

export class DefaultOperationMenu extends Menu {
    constructor(canvas: Canvas) {
        super(new SelectButton(canvas));
    }
}
