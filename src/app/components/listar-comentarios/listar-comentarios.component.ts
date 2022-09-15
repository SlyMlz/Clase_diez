import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {


  listComentarios:Comentario [] = [
    {
      titulo:'Cibersegurity',
      autor:'Meliza Gomez',
      fechaCreacion:new Date(),
      texto:'Este es un comentario',
    },

    {
      titulo:'Angular developer',
      autor:'Fabian Montañez',
      fechaCreacion:new Date(),
      texto:'Este es un comentario2',
    },

    {
      titulo:'Angular developer',
      autor:'Sebastian Pérez',
      fechaCreacion:new Date(),
      texto:'Este es un comentario3',
    },

    {
      titulo:'Dart developer',
      autor:'Dario Campiño',
      fechaCreacion:new Date(),
      texto:'Este es un comentario4',
    },

    {
      titulo:'Scrum Master',
      autor:'Silvia Fuertes',
      fechaCreacion:new Date(),
      texto:'Este es un comentario3',
    },

    {
      titulo:'Product Owner',
      autor:'Catheryn Cabrera',
      fechaCreacion:new Date(),
      texto:'Este es un comentario4',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
