import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Employee,
         EmployeeService }    from './employee.service';

@Component({
  template: `
    <h3 highlight>Employee Detail</h3>
    <div *ngIf="employee">
      <div>Id: {{employee.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="employee.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Employee List</a>
  `
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private heroService: EmployeeService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.heroService.getEmployee(id).then(employee => this.employee = employee);
  }
}
