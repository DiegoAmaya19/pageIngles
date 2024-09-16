import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageMainComponent } from './page-main-welcome/page-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, PageMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  valorBarraNavegacion = "barra-navegacion";

  menu:boolean = false;

  muestraMenu(){

    if(this.menu){

      this.menu = false;

    }else{
      this.menu = true;
    }
  }

  scrollea($event:Event){

    const target = $event.target as HTMLElement;
    const valorScroll = target.scrollTop;

    console.log("Scroll desde el div-main"+valorScroll);

    if(valorScroll > 200){
      this.valorBarraNavegacion = "barra-navegacion-animacion";
    
      if(valorScroll > 250){

        console.log(valorScroll);
  
        this.valorBarraNavegacion = "barra-navegacion-nueva";
  
      }
    
    }else{
      this.valorBarraNavegacion = "barra-navegacion";
    }

  }

}