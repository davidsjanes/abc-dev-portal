import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRequestComponent } from './prod-request.component';

describe('ProdRequestComponent', () => {
  let component: ProdRequestComponent;
  let fixture: ComponentFixture<ProdRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdRequestComponent]
    });
    fixture = TestBed.createComponent(ProdRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
