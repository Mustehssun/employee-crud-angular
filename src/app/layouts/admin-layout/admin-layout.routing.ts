import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddEmployeeComponent } from '../../components/add-employee/add-employee.component';
import { ListEmployeesComponent } from '../../components/list-employees/list-employees.component';
import { AddDepartmentComponent } from '../../components/add-department/add-department.component';
import { ListDepartmentsComponent } from '../../components/list-departments/list-departments.component';
import {UpdateEmployeeComponent} from '../../components/update-employee/update-employee-component';
import {UpdateDepartmentComponent} from '../../components/update-department/update-department.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'add-employee',   component: AddEmployeeComponent },
    { path: 'update-employee',   component: UpdateEmployeeComponent },
    { path: 'list-employees',     component: ListEmployeesComponent },
    { path: 'add-department',     component: AddDepartmentComponent },
    { path: 'update-department',     component: UpdateDepartmentComponent },
    { path: 'list-departments',          component: ListDepartmentsComponent }
];
