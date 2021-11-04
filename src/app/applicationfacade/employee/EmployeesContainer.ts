import {Employee} from "./Employee";

export class EmployeesContainer {
  public employees: Employee[];

  constructor() {
    const mustehssun = new Employee();
    mustehssun.id = "1";
    mustehssun.firstName = "Mustehssun";
    mustehssun.lastName = "Iqbal";
    mustehssun.email = "mustehssun@gmail.com";
    mustehssun.phoneNumber = "03422459109";
    mustehssun.salary = 10000000000000;

    const elon = new Employee();
    elon.id = "2";
    elon.firstName = "Elon";
    elon.lastName = "Musk";
    elon.email = "elon.musk@spacex.com";
    elon.phoneNumber = "03422459109";
    elon.salary = 10000000000000;

    this.employees = [
      mustehssun,
      elon
    ];
  }
}
