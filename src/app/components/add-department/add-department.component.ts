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
    .subscribe(department => alert("Department added successfully!"),
        err => {
          const combinedMessage = err.error.reduce((acc, elem) => acc + elem + "\n");

          alert(combinedMessage);
        });
  }

  constructor(private restService: DepartmentRestService) {}

  ngOnInit() {
  }

}
