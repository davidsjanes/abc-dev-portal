import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAccountsComponent } from './link-accounts.component';

describe('LinkAccountsComponent', () => {
  let component: LinkAccountsComponent;
  let fixture: ComponentFixture<LinkAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkAccountsComponent]
    });
    fixture = TestBed.createComponent(LinkAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
