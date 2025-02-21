import { ButtonBuilder } from './buttons/ButtonBuilder';

export class ShapeMenu {
    private readonly buttons: ButtonBuilder[] = [];

    constructor(...buttons: ButtonBuilder[]) {
        this.buttons.push(...buttons);
    }

    buildShapeMenu() {
        const menu = document.createElement('div');
        for (const button of this.buttons) {
            menu.append(button.buildButton());
        }
        return menu;
    }
}
