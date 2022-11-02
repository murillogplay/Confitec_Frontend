import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = environment.URL_API + 'usuario';

  constructor(private http: HttpClient) { }
  
  public list(): Observable<Usuario>{ 
    return this.http.get<Usuario>(this.baseUrl + "/listar")
    .pipe(
      first(),
      tap( result => console.log(result))
    )
  }

}
