import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentContinuousComponent } from './present-continuous.component';

describe('PresentContinuousComponent', () => {
  let component: PresentContinuousComponent;
  let fixture: ComponentFixture<PresentContinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentContinuousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
