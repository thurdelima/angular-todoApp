import { Employee } from "./../employee.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeNewModalComponent } from "./../employee-new-modal/employee-new-modal.component";

//import employees from '../employees';
import { EmployeeService } from "../employee.service";
//@ts-ignore
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  //employees = employees;
  showMessageSuccess = false;
  employee: Employee;

  //@ts-ignore
  @ViewChild(EmployeeNewModalComponent) //pegar a referencia de um elemento
  employeeNewModal: EmployeeNewModalComponent;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {}

  getSalaryColor(employee) {
    return employee.salary > 20000 ? "green" : null;
  }

  openNewModal() {
    this.employeeNewModal.show();
  }

  onNewEmployee(employee: Employee) {
    console.log(employee);
    this.employee = employee;
    this.showMessageSuccess = true;
  }
}
