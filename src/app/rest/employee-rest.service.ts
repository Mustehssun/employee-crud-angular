import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../applicationfacade/employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {
  public getEmployees(offset: Number, limit: Number) {
    offset = offset == null? 0: offset;
    limit = limit == null? 5: limit;

    console.log("offset", offset);
    console.log("limit", limit);

    return this.httpClient.get<Employee[]>("http://localhost:3000/employees/?offset=" + offset + "&limit=" + limit)
  }

  public addEmployee(employee: Employee) {
    return this.httpClient.post<Employee>("http://localhost:3000/employees/", {
      "firstName": employee.firstName,
      "lastName": employee.lastName,
      "salary": employee.salary,
      "email": employee.email,
      "phoneNumber": employee.phoneNumber
    })
  }

  public updateEmployee(employee: Employee) {
    return this.httpClient.post<Employee>("http://localhost:3000/employees/" + employee.id, {
      "firstName": employee.firstName,
      "lastName": employee.lastName,
      "salary": employee.salary,
      "email": employee.email,
      "phoneNumber": employee.phoneNumber
    })
  }

  public deleteEmployee(id: String) {
    return this.httpClient.delete<Employee>("http://localhost:3000/employees/" + id);
  }

  constructor(private httpClient: HttpClient) {

  }
}
