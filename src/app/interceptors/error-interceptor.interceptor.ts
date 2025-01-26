import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, throwError } from 'rxjs';

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  const toastr: ToastrService = inject(ToastrService)

  return next(req).pipe(
    catchError((error) => {
      if(error) {
        switch(error.status) {
          case 404:
          toastr.error('Insira os dados corretamente')
          return of(error)
          case 403:
            toastr.error('API OFFLINE')
        }
      }
      console.clear()
      return throwError(() => error)
    })
  )
};
