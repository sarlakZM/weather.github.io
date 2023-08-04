import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, share, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<HttpRequest<unknown>, HttpResponse<unknown>> = new Map();
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    if (req.headers.get('reset')) {
      //new HttpHeaders({reset})
      this.cache.delete(req);
    }
    const cachedResponse: HttpResponse<unknown> = this.cache.get(
      req
    ) as HttpResponse<unknown>;
    if (cachedResponse) {
      return of(cachedResponse.clone());
    } else {
      return next.handle(req).pipe(
        tap(stateEvent => {
          if (stateEvent instanceof HttpResponse) {
            this.cache.set(req, stateEvent.clone());
          }
        }),
        share()
      );
    }
  }
}
