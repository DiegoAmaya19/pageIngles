import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ClaseTensesComponent } from '../clase-tenses/ejmplos/clase-tenses.component';

@Component({
  selector: 'app-menu-opciones',
  standalone: true,
  imports: [RouterModule, RouterLink, ClaseTensesComponent],
  templateUrl: './menu-opciones.component.html',
  styleUrl: './menu-opciones.component.css'
})
export class MenuOpcionesComponent {

}
