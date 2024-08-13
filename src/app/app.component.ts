import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  menu:boolean = false;

  muestraMenu(){

    if(this.menu){

      this.menu = false;

    }else{
      this.menu = true;
    }
  }

}
