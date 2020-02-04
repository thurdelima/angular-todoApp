import { Injectable } from "@angular/core";

export interface Employee {
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  employees: Employee[] = [];
  constructor() {}

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    //console.log(event);
    this.employees.push(employee);
  }
}

//export default employees;
