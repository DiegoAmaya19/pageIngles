import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporteCorreoComponent } from './aporte-correo.component';

describe('AporteCorreoComponent', () => {
  let component: AporteCorreoComponent;
  let fixture: ComponentFixture<AporteCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AporteCorreoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AporteCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
