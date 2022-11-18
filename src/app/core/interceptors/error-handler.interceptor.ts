import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    environment.loading.showLoading = false;
    return next
      .handle(request)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(error: any): Observable<HttpEvent<any>> {
    environment.loading.showLoading = false;
    let data = {};
    if (error.status === 0) {
      data = {
        reason: 'رجاء تحقق من اتصال الانترنت',
        status: error.status
      };
    } else if (error.status === 401) {
      data = {
        reason: 'ليس لديك صلاحية',
        status: error.status
      };
    } else {
      data = {
        reason: 'عفوا , حدث خطا من الخادم',
        status: error.status
      };
    }
    if (error.status !== 403) {
      environment.loading.showLoading = false;
      //  this.errorDialogService.openDialog(data);
    }
    throw error;
  }
}
