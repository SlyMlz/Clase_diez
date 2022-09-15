import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  agregarComentarios: FormGroup;
  
    constructor(private fb: FormBuilder){
      this.agregarComentarios = this.fb.group(
        {
          titulo:['',Validators.required],
          autor:['',Validators.required],
          texto:['',Validators.required]
        }
      )
    }
  
  

  ngOnInit(): void {
  }

  //metodo para agregar el comentario
  agregar(){
    console.log(this.agregarComentarios);
    const comentario:Comentario = {
      titulo: this.agregarComentarios.get('titulo')?.value,
      autor: this.agregarComentarios.get('autor')?.value,
      texto: this.agregarComentarios.get('texto')?.value,
      fechaCreacion: new Date()
    }
    console.log(comentario);
  }

}
