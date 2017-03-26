import { Component, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { Threejs } from '@dew/threejs/src';
import { BaseCoreController, Design2dCoreController } from '../coreControllers';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements AfterViewInit {

  @Input()
  coreController: BaseCoreController;

  @Input()
  threejs: Threejs;

  // @Output() onVote = new EventEmitter<boolean>();

  constructor() { }

  ngAfterViewInit() {
    /*
    let hideBtn = document.getElementById('hideGrid');
    hideBtn.addEventListener('click', () => {
      //this.threejs.uiManager.hideGrid();
      console.log('lcicking');
    });
    */
  }

  /*
  fireAction(isVote: boolean): void {
    this.onVote.emit(isVote);
  }
  */

  /*
  hideGrid(): void {
    if (this.threejs) { this.threejs.uiManager.hideGrid(); }
  }
  showGrid(): void {
    if (this.threejs) { this.threejs.uiManager.showGrid(); }
  }
  */


}
