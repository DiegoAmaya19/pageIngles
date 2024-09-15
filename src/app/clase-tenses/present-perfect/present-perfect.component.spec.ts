import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectComponent } from './present-perfect.component';

describe('PresentPerfectComponent', () => {
  let component: PresentPerfectComponent;
  let fixture: ComponentFixture<PresentPerfectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentPerfectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentPerfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
