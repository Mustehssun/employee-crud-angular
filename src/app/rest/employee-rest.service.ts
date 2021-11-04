import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeesContainer} from '../applicationfacade/employee/EmployeesContainer';
import {Employee} from '../applicationfacade/employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {
  public getEmployees() {
    return this.httpClient.get<Employee[]>("http://localhost:3000/employees/")
  }

  public addEmployee() {
    return this.httpClient.post<Employee>("http://localhost:3000/employees/", {
      "firstName": "Mustehssun",
      "lastName": "Iqbal",
      "salary": 100,
      "email": "mustehssun@gmail.com",
      "phoneNumber": "03422459109"
    })
  }

  constructor(private httpClient: HttpClient) {

  }
}
