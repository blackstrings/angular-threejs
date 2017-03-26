import { Threejs, CanvasType } from '@dew/threejs/src';
import { BaseCoreController, Design2dCoreController } from './';

export module CoreControllerFactory {

    export function get(canvasType: CanvasType, threejs: Threejs): BaseCoreController {
        switch(canvasType){
            case CanvasType.DECK_DESIGN_2D:
                return new Design2dCoreController(threejs);
            default:
                return null;
        }
    }
}