import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { LibroComponent } from './libro/libro.component';
import { CrearBibliotecaComponent } from './crear-biblioteca/crear-biblioteca.component';
import { ConfiguracionBibliotecaComponent } from './configuracion-biblioteca/configuracion-biblioteca.component';
import { SharedModule } from '../../shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { MiniaturaLibroComponent } from './miniatura-libro/miniatura-libro.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  },
  {
    path: 'biblioteca/:id',
    component: BibliotecaComponent
  },
  {
    path: 'nuevo-libro',
    component: CrearLibroComponent
  },
  {
    path: 'libro/:id',
    component: LibroComponent
  },
  {
    path: 'nueva-biblioteca',
    component: CrearBibliotecaComponent
  },
  {
    path: 'biblioteca/:id/configuracion',
    component: ConfiguracionBibliotecaComponent
  }
];
  

@NgModule({
  declarations: [
    CatalogoComponent,
    BibliotecaComponent,
    CrearLibroComponent,
    LibroComponent,
    CrearBibliotecaComponent,
    ConfiguracionBibliotecaComponent,
    MiniaturaLibroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NotifierModule
  ]
})
export class BibliotecaModule { }
