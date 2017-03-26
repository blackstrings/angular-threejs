import { Threejs } from '@dew/threejs/src';
import { BaseCoreController } from './';
import { Shape2dController, UIController} from '../controllerModules';

export class Design2dCoreController extends BaseCoreController {

    shape2dController: Shape2dController;
    uiController: UIController;

    constructor(threejs: Threejs) {
        super(threejs);
        this.init();
    }

    init(): void {
        this.shape2dController = new Shape2dController(this.threejs);
        this.uiController = new UIController(this.threejs);
    }

    showGrid(): void { this.uiController.showGrid(); }
    hideGrid(): void { this.uiController.hideGrid(); }

    angle(): void { this.shape2dController.angle(); }
    notch(): void { this.shape2dController.notch(); }

}