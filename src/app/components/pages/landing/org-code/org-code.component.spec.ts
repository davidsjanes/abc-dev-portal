import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCodeComponent } from './org-code.component';

describe('OrgCodeComponent', () => {
  let component: OrgCodeComponent;
  let fixture: ComponentFixture<OrgCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgCodeComponent]
    });
    fixture = TestBed.createComponent(OrgCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
