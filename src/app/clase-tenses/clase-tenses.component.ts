import { Component } from '@angular/core';

@Component({
  selector: 'app-clase-tenses',
  standalone: true,
  imports: [],
  templateUrl: './clase-tenses.component.html',
  styleUrl: './clase-tenses.component.css'
})
export class ClaseTensesComponent {

  scrollable($event:Event){
    console.log("Scrolenaodo pp dede");
  }

}
