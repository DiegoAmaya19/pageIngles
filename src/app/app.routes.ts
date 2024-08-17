import { Routes } from '@angular/router';
import { AporteCorreoComponent } from './aporte-correo/aporte-correo.component';
import { ClaseTensesComponent } from './clase-tenses/ejmplos/clase-tenses.component';
import { explicacionComponent } from './clase-tenses/explicacion/explicacion';

export const routes: Routes = [
    
    {path: 'aporteCorreo', component: AporteCorreoComponent},
    {path: 'explicaionTenses', component: explicacionComponent},
    {path: 'claseTenses', component: ClaseTensesComponent}

];
