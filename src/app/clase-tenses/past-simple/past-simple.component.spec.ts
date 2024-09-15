import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSimpleComponent } from './past-simple.component';

describe('PastSimpleComponent', () => {
  let component: PastSimpleComponent;
  let fixture: ComponentFixture<PastSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
