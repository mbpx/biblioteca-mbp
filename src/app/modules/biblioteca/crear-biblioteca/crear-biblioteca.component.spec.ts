import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBibliotecaComponent } from './crear-biblioteca.component';

describe('CrearBibliotecaComponent', () => {
  let component: CrearBibliotecaComponent;
  let fixture: ComponentFixture<CrearBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBibliotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
