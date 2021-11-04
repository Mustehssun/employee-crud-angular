import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../applicationfacade/employee/Employee';
import {Department} from '../applicationfacade/department/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentRestService {
  public getDepartments(offset: Number, limit: Number) {
    offset = offset == null? 0: offset;
    limit = limit == null? 5: limit;

    console.log("offset", offset);
    console.log("limit", limit);

    return this.httpClient.get<Department[]>("http://localhost:3000/departments/?offset=" + offset + "&limit=" + limit);
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
    return this.httpClient.delete<Department>("http://localhost:3000/departments/" + id);
  }

  constructor(private httpClient: HttpClient) {

  }
}
