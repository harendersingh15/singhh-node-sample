import { Component }   from '@angular/core';

import { EmployeeService } from './employee.service';

@Component({
  template: `
    <h2>Employee of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ EmployeeService ]
})
export class EmployeeComponent {
  userName = '';
  constructor() {
    this.userName = 'temp user';
  }
}
