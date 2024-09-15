import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureSimpleComponent } from './future-simple.component';

describe('FutureSimpleComponent', () => {
  let component: FutureSimpleComponent;
  let fixture: ComponentFixture<FutureSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
