import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionBibliotecaComponent } from './configuracion-biblioteca.component';

describe('ConfiguracionBibliotecaComponent', () => {
  let component: ConfiguracionBibliotecaComponent;
  let fixture: ComponentFixture<ConfiguracionBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionBibliotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
