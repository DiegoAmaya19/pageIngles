import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuOpcionesComponent } from '../menu-opciones/menu-opciones.component';

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MenuOpcionesComponent],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.css'
})
export class PageMainComponent {

}
