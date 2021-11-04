import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../applicationfacade/employee/Employee';
import {EmployeeRestService} from '../../rest/employee-rest.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee-component.html',
  styleUrls: ['./update-employee-component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input()
  public employee: Employee = new Employee;

  public onSave() {
    this.restService.updateEmployee(this.employee)
    .subscribe(employee => alert("Employee updated successfully!"),
        err => {
          const combinedMessage = err.error.reduce((acc, elem) => acc + elem + "\n");

          alert(combinedMessage);
        });
  }

  constructor(private restService: EmployeeRestService) {}

  ngOnInit() {
  }

}
