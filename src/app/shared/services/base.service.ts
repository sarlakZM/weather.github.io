import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseReadonlyService<T> {
  protected badeUrl!: string;
  protected path!: string;
  protected options = {
    headers: new HttpHeaders(),
    params: new HttpParams(),
  };

  protected constructor(protected httpClient: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(this.badeUrl)
      .pipe(map(response => response));
  }

  get(params: HttpParams): Observable<T> {
    this.options.params = params;
    return this.httpClient
      .get<T>(`${this.badeUrl}${this.path}`, this.options)
      .pipe(map(response => response));
  }
}

@Injectable()
export abstract class BaseService<T> extends BaseReadonlyService<T> {
  protected constructor(
    httpClient: HttpClient,
    @Inject('badeUrl') protected _badeUrl: string
  ) {
    super(httpClient);
    this.badeUrl = `${_badeUrl}`;
  }

  create(t: T): Observable<T> {
    return this.httpClient
      .post<T>(this.badeUrl, t)
      .pipe(map(response => response));
  }

  update(id: number, t: T): Observable<Object> {
    return this.httpClient
      .put(`${this.badeUrl}/${id}`, t)
      .pipe(map(response => response));
  }

  delete(id: number[]): Observable<Object> {
    return this.httpClient
      .delete(`${this.badeUrl}/${id}`)
      .pipe(map(response => response));
  }
}
