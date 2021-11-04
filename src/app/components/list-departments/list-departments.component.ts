import {Component, Input, OnInit} from '@angular/core';
import {DepartmentsContainer} from '../../applicationfacade/department/DepartmentsContainer';

@Component({
  selector: 'app-icons',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {
  @Input()
  public departments: DepartmentsContainer = new DepartmentsContainer();

  constructor() {}

  ngOnInit() {
  }

}
