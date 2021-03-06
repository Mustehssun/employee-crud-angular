import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartmentsComponent } from './list-departments.component';

describe('IconsComponent', () => {
  let component: ListDepartmentsComponent;
  let fixture: ComponentFixture<ListDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
