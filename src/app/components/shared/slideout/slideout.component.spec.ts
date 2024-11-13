import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideoutComponent } from './slideout.component';

describe('SlideoutComponent', () => {
  let component: SlideoutComponent;
  let fixture: ComponentFixture<SlideoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideoutComponent]
    });
    fixture = TestBed.createComponent(SlideoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
