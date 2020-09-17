import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  handleError(error: HttpErrorResponse): Observable<HttpEvent<unknown>> {
    console.log('intercepted error from server')
    return throwError(error)
  }
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(catchError(this.handleError))
  }
}
