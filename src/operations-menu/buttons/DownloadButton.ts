import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { Canvas } from '../../canvas/Canvas';
import { DownloadService } from '../service/DownloadService';

export class DownloadButton extends GenericButton implements ButtonBuilder {
    private readonly downloadService: DownloadService;

    constructor(canvas: Canvas) {
        super(canvas);
        this.downloadService = new DownloadService(canvas);
    }

    buildButton(): HTMLButtonElement {
        return super.createButton('DOWNLOAD', this.downloadSvg.bind(this));
    }

    downloadSvg() {
        this.downloadService.downloadSvg();
    }
}
