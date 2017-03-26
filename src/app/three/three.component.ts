import { Component, AfterViewInit } from '@angular/core';
import { Threejs, CanvasType } from '@dew/threejs/src';
import { BaseCoreController, CoreControllerFactory, Design2dCoreController } from '../coreControllers';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements AfterViewInit {

  threejs: Threejs;
  coreController: BaseCoreController;

  isReady: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    let canvas = document.getElementById("canvasContainer");
    let canvasType = CanvasType.DECK_DESIGN_2D;
    this.threejs = new Threejs(canvas, 400, canvasType);
    this.coreController = CoreControllerFactory.get(canvasType, this.threejs);  //new Design2dCoreController(this.threejs); //
    this.isReady = true;
  }

  resize(): void {
    this.threejs.resize();
  }


}
