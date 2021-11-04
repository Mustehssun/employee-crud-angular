import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../applicationfacade/department/Department';

@Component({
  selector: 'app-typography',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  @Input()
  public department: Department = new Department();

  public onSave() {
    console.log(this.department);
  }

  constructor() { }

  ngOnInit() {
  }

}
