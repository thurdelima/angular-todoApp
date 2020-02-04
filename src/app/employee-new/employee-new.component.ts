import { Component, OnInit } from "@angular/core";
import { EmployeeService, Employee } from "./../employee.service";

@Component({
  selector: "app-employee-new",
  templateUrl: "./employee-new.component.html",
  styleUrls: ["./employee-new.component.css"]
})
export class EmployeeNewComponent implements OnInit {
  employee: Employee = {
    name: "",
    salary: 0,
    bonus: 0
  };

  //employees = employees;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
  }
}
