import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../applicationfacade/department/Department';
import {DepartmentRestService} from '../../rest/department-rest.service';

@Component({
  selector: 'app-icons',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {
  @Input()
  public departments: Department[] = [];

  constructor(private restService: DepartmentRestService) {
    this.restService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }

  public onDelete(department: Department) {
    this.restService.deleteDepartment(department.id)
    .subscribe(() => {
      this.departments = this.departments.filter(elem => elem.id !== department.id);
    });
  }

  ngOnInit() {
  }

}
