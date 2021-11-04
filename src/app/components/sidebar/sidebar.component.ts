import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/add-employee', title: 'Add Employee',  icon:'person', class: '' },
    { path: '/update-employee', title: 'Update Employee',  icon:'content_paste', class: '' },
    { path: '/list-employees', title: 'List Employees',  icon:'content_paste', class: '' },
    { path: '/add-department', title: 'Add Department',  icon:'person', class: '' },
    { path: '/update-department', title: 'Update\ Department',  icon:'person', class: '' },
    { path: '/list-departments', title: 'List Departments',  icon:'content_paste', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
