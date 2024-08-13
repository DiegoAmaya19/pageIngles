import { Routes } from '@angular/router';
import { AporteCorreoComponent } from './aporte-correo/aporte-correo.component';
import { ClaseTensesComponent } from './clase-tenses/clase-tenses.component';

export const routes: Routes = [
    
    {path: 'aporteCorreo', component: AporteCorreoComponent},
    {path: 'claseTenses', component: ClaseTensesComponent}

];
