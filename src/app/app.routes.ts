import { Routes } from '@angular/router';
import { AporteCorreoComponent } from './aporte-correo/aporte-correo.component';
import { PageMainComponent } from './page-main-welcome/page-main.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';

export const routes: Routes = [
    
    {path: '', redirectTo: '/pageMain', pathMatch: 'full' },
    {path: 'pageMain', component: PageMainComponent},
    {path: 'menuOpciones', component: MenuOpcionesComponent},
    {path: 'aporteCorreo', component: AporteCorreoComponent},
    {path: 'claseTenses', loadChildren: () => import('./clase-tenses/routes-tenses').then(m => m.ROUTES_TENSES)}

];