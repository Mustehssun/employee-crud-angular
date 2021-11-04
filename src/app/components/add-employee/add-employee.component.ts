import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../applicationfacade/employee/Employee';

@Component({
  selector: 'app-user-profile',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input()
  public employee: Employee = new Employee;

  public onSave() {
    console.log(this.employee);
  }

  constructor() { }

  ngOnInit() {
  }

}
