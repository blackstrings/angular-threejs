import { Component, ChangeDetectionStrategy } from '@angular/core';

// changedetection helps binding reference to a variable from one component that changes after being set

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app works!';

  talk(value: boolean): void {
    console.log(value);
  }
}
