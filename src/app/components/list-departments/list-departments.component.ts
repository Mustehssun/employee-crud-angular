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

  @Input()
  public pageNum: any = 1;

  public limit: any = 5;

  public onDelete(department: Department) {
    this.restService.deleteDepartment(department.id)
        .subscribe(() => this.departments = this.departments.filter(elem => elem.id !== department.id));
  }

  public next() {
    this.pageNum++;

    this.getDepartmentsFromRestService();
  }

  public prev() {
    if(this.pageNum > 1) {
      this.pageNum--;
    }
    this.getDepartmentsFromRestService();
  }

  private getDepartmentsFromRestService() {
    this.restService.getDepartments(this.pageNum, this.limit)
    .subscribe(departments => {
      this.departments = departments;

      console.log(this.departments);
    });
  }

  constructor(private restService: DepartmentRestService) {
    this.getDepartmentsFromRestService();
  }

  ngOnInit() {
  }

}
