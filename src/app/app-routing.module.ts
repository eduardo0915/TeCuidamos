import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule),

  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./paginas/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./paginas/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'verificar-correo',
    loadChildren: () => import('./paginas/verificar-correo/verificar-correo.module').then( m => m.VerificarCorreoPageModule)
  },
  {
    path: 'recordatorios',
    loadChildren: () => import('./paginas/recordatorios/recordatorios.module').then( m => m.RecordatoriosPageModule)
  },
  {
    path: 'autocuidado',
    loadChildren: () => import('./paginas/autocuidado/autocuidado.module').then( m => m.AutocuidadoPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./recordatorios/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'informacion-basica',
    loadChildren: () => import('./paginas/informacion-basica/informacion-basica.module').then( m => m.InformacionBasicaPageModule)
  },
  {
    path: 'enfermedades',
    loadChildren: () => import('./paginas/enfermedades/enfermedades.module').then( m => m.EnfermedadesPageModule)
  },
  {
    path: 'discapacidades',
    loadChildren: () => import('./paginas/discapacidades/discapacidades.module').then( m => m.DiscapacidadesPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./paginas/contactos/contactos.module').then( m => m.ContactosPageModule)
  }


  
];
 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
