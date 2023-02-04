import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginModule } from './modules/login/login.module';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { BibliotecaModule } from './modules/biblioteca/biblioteca.module';
import { SharedModule } from './shared.module';
import { NotifierModule } from 'angular-notifier';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    SharedModule,
    NotifierModule,

    LoginModule,
    BibliotecaModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
