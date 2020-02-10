import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { EmployeeService, Employee } from "./../employee.service";

declare const $;
@Component({
  selector: "app-employee-new-modal",
  templateUrl: "./employee-new-modal.component.html",
  styleUrls: ["./employee-new-modal.component.css"]
})
export class EmployeeNewModalComponent implements OnInit {
  employee: Employee = {
    name: "",
    salary: 0,
    bonus: 0
  };

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private element: ElementRef,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {}

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal("show");
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal("hide");
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }
}
