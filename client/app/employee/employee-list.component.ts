import { Component, OnInit } from '@angular/core';

import {
  Employee,
  EmployeeService
} from './employee.service';

@Component({
  template: `
    <h3 highlight>Employee List</h3>
       <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr  *ngFor='let employee of employees | async'>
        <td> <a routerLink="{{employee.id}}">{{employee.name}}</a></td>
        <td>{{employee.mobile}}</td>
        <td>{{employee.age}}</td>
      </tr>
    </tbody>
  </table>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: Promise<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
