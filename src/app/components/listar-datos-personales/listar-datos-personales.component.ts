import { Component, OnInit } from '@angular/core';
import { Comentario2 } from 'src/app/interfaces/Datos';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {


  listDatos:Comentario2 [] = [
    {
      identificacion:123456,
      nombre:'Meliza',
      apellido:'Gomez',
      direccion: 'Ipiales',
      email:'slymlz98dta@gmail.com',
      telefono: '3146399015',
      texto:'Este es un comentario',
    },

    
    {
      identificacion:654321,
      nombre:'Catheryn',
      apellido:'Cabrera',
      direccion: 'Ipiales',
      email:'Catedta@gmail.com',
      telefono: '3127899015',
      texto:'Este es un comentario',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
