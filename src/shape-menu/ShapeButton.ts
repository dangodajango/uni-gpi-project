import { Canvas } from '../canvas/canvas';

export class ShapeButton {
    constructor(protected readonly canvas: Canvas) {}

    protected createButton(
        textContent: string,
        eventListenerFunction: () => void
    ) {
        const button = document.createElement('button');
        button.textContent = textContent;
        button.addEventListener('click', eventListenerFunction);
        return button;
    }
}