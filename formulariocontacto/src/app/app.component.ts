import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulariocontacto';

  //ATRIBUTOS CON NGMODEL

  nombre = '';
  email = '';
  mensaje = '';
  respuesta = 0;

  contacto = [
              {
                "nombre" : '',
                "email"  : '',
                "mensaje": '',
                "respuesta" : 0
              }
            ];
//BINDING BANANA IN BOX


enviar() {
  this.contacto.push(
                  { "nombre" : this.nombre,
                    "email" : this.email,
                    "mensaje" : this.mensaje,
                    "respuesta" : this.respuesta});
}
}
