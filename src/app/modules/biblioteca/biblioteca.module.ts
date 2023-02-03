import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  },
  {
    path: 'biblioteca/:id',
    component: BibliotecaComponent
  },
  // {
  //   path: 'libro/:id',
  //   component: null
  // }
];
  

@NgModule({
  declarations: [
    CatalogoComponent,
    BibliotecaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BibliotecaModule { }
