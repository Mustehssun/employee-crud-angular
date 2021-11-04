import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../applicationfacade/employee/Employee';
import {Department} from '../applicationfacade/department/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentRestService {
  public getDepartments() {
    return this.httpClient.get<Department[]>("http://localhost:3000/departments/")
  }

  public addDepartment(department: Department) {
    console.log("adding department...");

    return this.httpClient.post<Department>("http://localhost:3000/departments/", {
      "name": department.name,
      "managerId": department.managerId
    });
  }

  public updateDepartment(department: Department) {
    console.log("updating department...");

    return this.httpClient.post<Department>("http://localhost:3000/departments/" + department.id, {
      "name": department.name,
      "managerId": department.managerId
    });
  }

  public deleteDepartment(id: String) {
    console.log("updating department...");

    return this.httpClient.delete<Department>("http://localhost:3000/departments/" + id);
  }

  constructor(private httpClient: HttpClient) {

  }
}
