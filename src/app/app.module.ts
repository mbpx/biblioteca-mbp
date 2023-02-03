import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CatalogoComponent } from './modules/biblioteca/catalogo/catalogo.component';
import { LoginModule } from './modules/login/login.module';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { BibliotecaComponent } from './modules/biblioteca/biblioteca/biblioteca.component';
import { BibliotecaModule } from './modules/biblioteca/biblioteca.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    LoginModule,
    BibliotecaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
