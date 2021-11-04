import {Component, Input, OnInit} from '@angular/core';
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

  @Input()
  public pageNum: any = 1;

  public limit: any = 5;

  public onDelete(employee: Employee) {
    this.restService.deleteEmployee(employee.id)
    .subscribe(() => this.employees = this.employees.filter(elem => elem.id !== employee.id),
        err => alert("Error while deleting employee."));
  }

  public next() {
    this.pageNum++;

    this.getEmployeesFromRestService();
  }

  public prev() {
    if(this.pageNum > 1) {
      this.pageNum--;
    }
    this.getEmployeesFromRestService();
  }

  private getEmployeesFromRestService() {
    this.restService.getEmployees(this.pageNum, this.limit)
    .subscribe(employees => {
      this.employees = employees;

      console.log(this.employees);
    });
  }

  constructor(private restService: EmployeeRestService) {
    this.getEmployeesFromRestService();
  }

  ngOnInit() {
  }

}
