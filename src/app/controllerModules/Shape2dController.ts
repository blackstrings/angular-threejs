import { Threejs } from '@dew/threejs/src';
import { BaseModuleController } from './';

export class Shape2dController extends BaseModuleController {

    constructor(threejs: Threejs) {
        super(threejs);
    }

    notch(): void {
        console.log('notching');
    }

    angle(): void {
        console.log('angling');
    }
}