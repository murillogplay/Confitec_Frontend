import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/models/Usuario';
import { Resources } from 'src/assets/Resources';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
}) 

export class EditComponent implements OnInit {

  usuario: Usuario = new Usuario;
  maxDate: Date = new Date;

  escolaridades:any[] =  Resources.DROP_ESCOLARIDADE;

  constructor( public ref: DynamicDialogRef,
                public config: DynamicDialogConfig,) { }

  ngOnInit(): void {
    debugger;
    this.usuario = new Usuario;
    if (this.config.data.usuario.id  !== 0) this.usuario.Usuario(this.config.data.usuario);
    console.log(this.usuario)
    
  }

  sair(){ 
    this.ref.close(false)
  }

}
