import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EditComponent } from './edit/edit.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers:[DialogService]
})
export class UsuarioComponent implements OnInit {
 
  usuarios :  Usuario[] = [];
  constructor(private usuarioService: UsuarioService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    
    this.usuarioService.list().subscribe(  (data) =>  this.usuarios=Object.assign(data) ) 
      
  }
  openEditModal(usuario?:Usuario){
    
    const ref = this.dialogService.open(EditComponent, {
      data: {
        usuario:  usuario
      },
      header: 'Atualizar usuario',
      width: '80%',
      height: '80%', 
        baseZIndex: 10000
    });

    ref.onClose.subscribe(
      () => {
        this.list();
      }
    )
  }
   
}
