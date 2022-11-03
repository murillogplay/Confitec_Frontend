import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EditComponent } from './edit/edit.component';
import { DialogService } from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Resources } from 'src/assets/Resources';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers:[DialogService]
})
export class UsuarioComponent implements OnInit {
  escolaridades: any  = Resources.DROP_ESCOLARIDADE;
  usuarios :  Usuario[] = [];
  constructor(private usuarioService: UsuarioService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){ this.usuarioService.list().subscribe( (data) =>  this.usuarios=Object.assign(data) ) }

  getEscolaridade(id:number){ 
    var text = ''; 
    for ( var key in this.escolaridades)
      if (this.escolaridades[key].value == id )
        text = this.escolaridades[key].label
    return text
  }
  openEditModal(usuario?:Usuario){
    
    const ref = this.dialogService.open(EditComponent, {
      data: {
        usuario:  usuario  
      },
      header: 'Atualizar usuario',
      width: '80%', 
        baseZIndex: 10000
    });

    ref.onClose.subscribe(
      (close) => {
        if (close) this.list();
      }
    )
  }
   
  excluir(usuario:Usuario){

    this.confirmationService.confirm({
      target: event.target,
      message: 'Confirma a exclusão do usuario?',
      acceptLabel:'Sim',
      rejectLabel:'Não',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usuarioService.delete(usuario).subscribe( () =>  {
            this.messageService.add({severity: 'success', summary: 'Registro excluído!', life: 3000})
            this.list();
        })
      },
      reject: () => {
          console.log("exclusão cancelada")
      }
  });
  }
}
