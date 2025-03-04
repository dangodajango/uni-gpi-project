import { Canvas } from '../../canvas/Canvas';

export class DownloadService {
    constructor(private readonly canvas: Canvas) {}

    downloadSvg() {
        const svgContent = new XMLSerializer().serializeToString(this.canvas.svgContainer.node);
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'canvas.svg';
        downloadLink.click();

        URL.revokeObjectURL(url);
    }
}
