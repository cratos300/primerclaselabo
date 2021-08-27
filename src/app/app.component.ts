import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeraclase';
  miUsuario : Usuario;
  
  constructor() {
    
    this.miUsuario = new Usuario();
  }
  saludar()
  {
    
    console.log("hola");
  }
}
