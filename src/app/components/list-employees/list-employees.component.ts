import {Component, Input, OnInit} from '@angular/core';
import {EmployeesContainer} from '../../applicationfacade/employee/EmployeesContainer';
import {EmployeeRestService} from '../../rest/employee-rest.service';
import {Employee} from '../../applicationfacade/employee/Employee';

@Component({
  selector: 'app-table-list',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  @Input()
  public employees: Employee[] = [];

  constructor(private restService: EmployeeRestService) {
    restService.getEmployees()
    .subscribe(employees => {
      this.employees = employees;

      console.log(this.employees);
    });
  }

  ngOnInit() {
  }

}
