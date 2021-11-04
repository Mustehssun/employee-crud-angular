import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../applicationfacade/department/Department';
import {DepartmentRestService} from '../../rest/department-rest.service';

@Component({
  selector: 'app-typography',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  @Input()
  public department: Department = new Department();

  public onSave() {
    this.restService.updateDepartment(this.department)
    .subscribe(department => alert("Department updated successfully!"));
  }

  constructor(private restService: DepartmentRestService) {}

  ngOnInit() {
  }

}
