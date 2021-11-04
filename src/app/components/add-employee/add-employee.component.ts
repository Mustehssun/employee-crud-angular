import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../applicationfacade/employee/Employee';
import {EmployeeRestService} from '../../rest/employee-rest.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input()
  public employee: Employee = new Employee;

  public onSave() {
    this.restService.addEmployee(this.employee)
    .subscribe(employee => alert("Employee created successfully!"),
        err => {
          const combinedMessage = err.error.reduce((acc, elem) => acc + elem + "\n");

          alert(combinedMessage);
        });
  }

  constructor(private restService: EmployeeRestService) {}

  ngOnInit() {
  }

}
