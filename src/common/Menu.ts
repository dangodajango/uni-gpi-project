import { ButtonBuilder } from './ButtonBuilder';

export class Menu {
    private readonly buttons: ButtonBuilder[] = [];

    constructor(...buttons: ButtonBuilder[]) {
        this.buttons.push(...buttons);
    }

    buildMenu() {
        const menu = document.createElement('div');
        for (const button of this.buttons) {
            menu.append(button.buildButton());
        }
        return menu;
    }
}
