import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturaLibroComponent } from './miniatura-libro.component';

describe('MiniaturaLibroComponent', () => {
  let component: MiniaturaLibroComponent;
  let fixture: ComponentFixture<MiniaturaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniaturaLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniaturaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
