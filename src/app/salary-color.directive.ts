import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[salaryColor]"
})
export class SalaryColorDirective {
  @Input()
  set salaryColor(value) {
    //setter
    const nativeElement: HTMLElement = this.element.nativeElement;
    const salary = parseFloat(value);
    nativeElement.style.color = salary > 20000 ? "green" : "red";
  }

  constructor(private element: ElementRef) {}
}
