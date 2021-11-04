import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../applicationfacade/department/Department';
import {DepartmentRestService} from '../../rest/department-rest.service';

@Component({
  selector: 'app-typography',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  @Input()
  public department: Department = new Department();

  public onSave() {
    this.restService.addDepartment(this.department)
    .subscribe(console.log);
  }

  constructor(private restService: DepartmentRestService) {}

  ngOnInit() {
  }

}
