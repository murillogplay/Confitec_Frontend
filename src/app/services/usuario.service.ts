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
 
  public post(usuario: Usuario): Observable<Usuario>{
    return this
    .http
    .post<Usuario>(this.baseUrl, usuario)
    .pipe(
      first(),
      tap( result => console.log(result))
    );
  }

  public put(usuario: Usuario): Observable<Usuario>{
    return this
    .http
    .put<Usuario>(this.baseUrl, usuario)
    .pipe(
      first(),
      tap( result => console.log(result))
    );
  }
  
  public delete(usuario: Usuario): Observable<Usuario>{
    return this
    .http
    .delete<Usuario>(this.baseUrl + '/' + usuario.id )
    .pipe(
      first(),
      tap( result => console.log(result))
    );
  }


}
