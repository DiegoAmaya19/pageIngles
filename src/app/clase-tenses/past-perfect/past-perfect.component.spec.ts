import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPerfectComponent } from './past-perfect.component';

describe('PastPerfectComponent', () => {
  let component: PastPerfectComponent;
  let fixture: ComponentFixture<PastPerfectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastPerfectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPerfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
