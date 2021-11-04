import {Department} from './Department';

export class DepartmentsContainer {
  public departments: Department[] = [];

  constructor() {
    const science = new Department();
    science.id = "1";
    science.name = "Science";
    science.managerId = 1;

    const arts = new Department();
    arts.id = "2";
    arts.name = "Arts";
    arts.managerId = 2;

    this.departments = [
        science,
        arts
    ];
  }
}
