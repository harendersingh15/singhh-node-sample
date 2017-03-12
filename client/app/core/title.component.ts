import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './client/core/title.component.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'Angular Modules';
  user = '';

  constructor() {
    this.user = 'guest user';
  }
}
