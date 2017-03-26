import { Component, OnInit } from '@angular/core';
import { Threejs, CanvasType } from '@dew/threejs/src';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  threejs: Threejs;
  constructor() { }

  ngOnInit() {
    let canvas = document.getElementById("canvasContainer");``
    this.threejs = new Threejs(canvas, 400, CanvasType.DECK_DESIGN_2D);
  }

  resize(): void {
    this.threejs.resize();
  }


}
