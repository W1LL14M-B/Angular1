import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: "Um gran poder requiere una gran responsabilidad",
    autor: "Ben parker"
  };

  personajes: string[] = ["spiderma","Venon","Octopus"];
}
