import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TdInicioComponent } from './components/td-inicio/td-inicio.component';
import { TdLoginComponent } from './components/td-login/td-login.component';
import { TdNavComponent } from './components/td-nav/td-nav.component';
import { TdNosotrosComponent } from './components/td-nosotros/td-nosotros.component';
import { TdAministradorComponent } from './components/td-aministrador/td-aministrador.component';
import { TdCompraComponent } from './components/td-compra/td-compra.component';
import { TdConfirmarCompraComponent } from './components/td-confirmar-compra/td-confirmar-compra.component';
import { TdContactosComponent } from './components/td-contactos/td-contactos.component';
import { TdEnviarAmigoComponent } from './components/td-enviar-amigo/td-enviar-amigo.component';
import { RestHttpService } from './_services/rest-http.service';
import { CargaImagenService } from './_services/uploader.service';
import { HttpClientModule } from '@angular/common/http';
import { TdServiciosComponent } from './components/td-servicios/td-servicios.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TdResetPasswordComponent } from './components/td-reset-password/td-reset-password.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TdInicioComponent,
    TdLoginComponent,
    TdNavComponent,
    TdAministradorComponent,
    TdNosotrosComponent,
    TdCompraComponent,
    TdConfirmarCompraComponent,
    TdContactosComponent,
    TdEnviarAmigoComponent,
    TdServiciosComponent,
    FileSelectDirective,
    InicioComponent,
    TdResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule, 
    FormsModule,
    NgxPaginationModule,
    [SweetAlert2Module.forRoot()],
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: TdInicioComponent, pathMatch: 'full' },
      /* { path: 'register', component: RegisterComponent }, */
    ])
  ],
  providers: [
    RestHttpService,
    TdNavComponent,
    CargaImagenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
