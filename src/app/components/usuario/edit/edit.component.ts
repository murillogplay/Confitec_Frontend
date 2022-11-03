import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
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

  constructor(  public ref: DynamicDialogRef,
                public config: DynamicDialogConfig,
                public usuarioService: UsuarioService,
                public messageService: MessageService ) { }

  ngOnInit(): void { 
    this.usuario = new Usuario;
    if (this.config.data.usuario  !== undefined) this.usuario.Usuario(this.config.data.usuario); 
    
  }

  salvar(){ 
    if (this.usuario.id == 0) this.novo();
    else this.editar();

    
  }

  novo(){
    this.usuarioService.post(this.usuario).subscribe(  () =>{
      this.messageService.add({severity: 'success', summary: 'Registro cadastrado!', life: 3000})
      this.ref.close(true)
    }) 
  }

  editar(){
    this.usuarioService.put(this.usuario).subscribe(  () => { 
      this.messageService.add({severity: 'success', summary: 'Registro atualizado!', life: 3000})
      this.ref.close(true) 
    }) 

  }

  sair(){ 
    this.ref.close(false)
  }

}
