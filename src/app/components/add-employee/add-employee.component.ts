import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../applicationfacade/employee/Employee';
import {EmployeeRestService} from '../../rest/employee-rest.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input()
  public employee: Employee = new Employee;

  public onSave() {
    this.restService.addEmployee(this.employee)
    .subscribe(console.log);
  }

  constructor(private restService: EmployeeRestService) {}

  ngOnInit() {
  }

}
