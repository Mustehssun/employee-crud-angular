import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddEmployeeComponent } from '../../components/add-employee/add-employee.component';
import { ListEmployeesComponent } from '../../components/list-employees/list-employees.component';
import { AddDepartmentComponent } from '../../components/add-department/add-department.component';
import { ListDepartmentsComponent } from '../../components/list-departments/list-departments.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {UpdateEmployeeComponent} from '../../components/update-employee/update-employee-component';
import {UpdateDepartmentComponent} from '../../components/update-department/update-department.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeesComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    ListDepartmentsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
