import { Threejs } from '@dew/threejs/src';
import { BaseModuleController } from './';

export class UIController extends BaseModuleController {

    constructor(threejs: Threejs) {
        super(threejs);
    }

    showGrid(): void {
        this.threejs.uiManager.showGrid();
    }
    hideGrid(): void {
        this.threejs.uiManager.hideGrid();
    }
}