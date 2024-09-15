import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tenses-page-main',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './tenses-page-main.component.html',
  styleUrl: './tenses-page-main.component.css'
})
export class TensesPageMainComponent {

}
