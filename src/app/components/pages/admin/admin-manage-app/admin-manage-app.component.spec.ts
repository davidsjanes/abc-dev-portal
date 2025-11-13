import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAppComponent } from './admin-manage-app.component';

describe('AdminManageAppComponent', () => {
  let component: AdminManageAppComponent;
  let fixture: ComponentFixture<AdminManageAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageAppComponent]
    });
    fixture = TestBed.createComponent(AdminManageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
