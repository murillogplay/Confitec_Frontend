import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {catchError} from "rxjs/operators";
import { Error } from '../models/error';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService ) {}
    
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     
    return next.handle(request)
        .pipe( 
            catchError((error:any) => {

                if (error.error instanceof ErrorEvent)  console.log('Erro no cliente!');
                else console.log('Erro no servidor!');
                 
                var msg = '';
                var erros: Error[] = [];

                erros = error.error.errors;

                erros.forEach(e => {
                    msg = msg + e.message + '   ' 
                });
                 
                this.messageService.add({severity: 'error', summary: 'Ocorreu um erro!', detail:  msg  , life: 3000}); 

                return throwError(error);
            })
        )
}

}
