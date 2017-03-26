import { Threejs } from '@dew/threejs/src';

export abstract class BaseModuleController {
    constructor(protected threejs: Threejs){}
}