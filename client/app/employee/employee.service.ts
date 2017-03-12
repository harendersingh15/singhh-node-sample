import { Injectable } from '@angular/core';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public mobile: string) { }
}

const EMPLOYEE: Employee[] = [
  new Employee(11, 'Mr. Nice', 20, '9999999999'),
  new Employee(12, 'Narco', 20, '9999999999'),
  new Employee(13, 'Bombasto', 20, '9999999999'),
  new Employee(14, 'Celeritas', 20, '9999999999'),
  new Employee(15, 'Magneta', 20, '9999999999'),
  new Employee(16, 'RubberMan', 20, '9999999999')
];

const FETCH_LATENCY = 500;

@Injectable()
export class EmployeeService {

  getEmployees() {
    return new Promise<Employee[]>(resolve => {
      setTimeout(() => { resolve(EMPLOYEE); }, FETCH_LATENCY);
    });
  }

  getEmployee(id: number | string) {
    return this.getEmployees()
      .then(employees => employees.find(employee => employee.id === +id));
  }

}
