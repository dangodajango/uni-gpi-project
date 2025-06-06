import { Canvas } from '../canvas/Canvas';

export class GenericButton {
    constructor(protected readonly canvas: Canvas) {}

    protected createButton(textContent: string, eventListenerFunction: () => void) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = textContent;
        button.addEventListener('click', eventListenerFunction);
        return button;
    }
}
