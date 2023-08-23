import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdInicioComponent } from './components/td-inicio/td-inicio.component';
import { TdNosotrosComponent } from './components/td-nosotros/td-nosotros.component';
import { TdLoginComponent } from './components/td-login/td-login.component';
import { TdEnviarAmigoComponent } from './components/td-enviar-amigo/td-enviar-amigo.component';
import { TdContactosComponent } from './components/td-contactos/td-contactos.component';
import { TdCompraComponent } from './components/td-compra/td-compra.component';
import { TdConfirmarCompraComponent } from './components/td-confirmar-compra/td-confirmar-compra.component';
import { TdAministradorComponent } from './components/td-aministrador/td-aministrador.component';
import { TdServiciosComponent } from './components/td-servicios/td-servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TdResetPasswordComponent } from './components/td-reset-password/td-reset-password.component';

const routes: Routes = [
  { path: 'login', component: TdLoginComponent, /* canActivate: [AuthGuard], */ children:[
    /* {
      path : 'inicio',
      component: InicioComponent,
    }, */
    {
      path : 'administrador',
      component: TdAministradorComponent,
    },
    
  ] },
  { path: 'home', component: TdInicioComponent, /* canActivate: [AuthGuard], */ children:[
    /* {
      path : 'inicio',
      component: InicioComponent,
    }, */
    {
      path : 'inicio',
      component: InicioComponent,
    },
    // {
    //   path : 'resetPassword',
    //   component: TdResetPasswordComponent,
    // },
    {
      path : 'nosotros',
      component: TdNosotrosComponent,
    },
    {
      path : 'contactos',
      component: TdContactosComponent,
    },
    
    {
      path : 'enviarAmigo',
      component: TdEnviarAmigoComponent,
    },
    {
      path : 'enviarAmigo/:nombre/:precio/:imagen/:descripcion/:referencia',
      component: TdEnviarAmigoComponent,
    },
    
    {
      path : 'compra',
      component: TdCompraComponent,
    },
    {
      path : 'compra/:nombre/:precio/:imagen/:gramos/:descripcion/:referencia',
      component: TdCompraComponent,
    },
    {
      path : 'confirmar',
      component: TdConfirmarCompraComponent,
    },
    {
      path : 'servicios',
      component: TdServiciosComponent,
    },
    {
      path : 'admin',
      component: TdLoginComponent,
    },
    {
      path : 'administrador',
      component: TdAministradorComponent,
    },
    
  ] },
  
 {path: '',  redirectTo: '/home/inicio', pathMatch:'full'/* component: TdInicioComponent */}, 
  {path: '**',  redirectTo: '/home/inicio', pathMatch:'full'/* component: TdLoginComponent, */},
];
  


/* @NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */
export const routing = RouterModule.forRoot(routes , {scrollPositionRestoration: 'top'});