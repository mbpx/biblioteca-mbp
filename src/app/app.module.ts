import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { LoginModule } from './modules/login/login.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
