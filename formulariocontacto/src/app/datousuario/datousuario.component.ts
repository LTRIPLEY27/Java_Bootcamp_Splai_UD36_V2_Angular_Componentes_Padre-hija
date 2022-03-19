import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datousuario',
  templateUrl: './datousuario.component.html',
  styleUrls: ['./datousuario.component.css']
})
export class DatousuarioComponent implements OnInit {

  constructor() { }

  @Input() contacto : any;

  ngOnInit(): void {
  }

}
