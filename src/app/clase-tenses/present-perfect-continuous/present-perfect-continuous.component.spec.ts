import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectContinuousComponent } from './present-perfect-continuous.component';

describe('PresentPerfectContinuousComponent', () => {
  let component: PresentPerfectContinuousComponent;
  let fixture: ComponentFixture<PresentPerfectContinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentPerfectContinuousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentPerfectContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
