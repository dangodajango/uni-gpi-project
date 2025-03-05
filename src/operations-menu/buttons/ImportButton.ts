import { Canvas } from '../../canvas/Canvas';
import { GenericButton } from '../../common/GenericButton';
import { ButtonBuilder } from '../../common/ButtonBuilder';
import { ImportService } from '../service/ImportService';

export class ImportButton extends GenericButton implements ButtonBuilder {
    private readonly importService: ImportService;

    constructor(canvas: Canvas) {
        super(canvas);
        this.importService = new ImportService(canvas);
    }

    buildButton(): HTMLButtonElement {
        return super.createButton('IMPORT', this.importSvg.bind(this));
    }

    importSvg() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.svg';
        fileInput.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            const file = target.files!.item(0);
            file!.text().then((svg) => this.importService.importSvg(svg));
        });
        fileInput.click();
    }
}
