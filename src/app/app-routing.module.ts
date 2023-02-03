import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CatalogoComponent } from './modules/biblioteca/catalogo/catalogo.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/biblioteca/biblioteca.module').then(m => m.BibliotecaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
