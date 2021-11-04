import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../applicationfacade/employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {
  public getEmployees() {
    return this.httpClient.get<Employee[]>("http://localhost:3000/employees/")
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

  constructor(private httpClient: HttpClient) {

  }
}
