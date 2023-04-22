import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contribute } from '../interfaces/contribute';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {
  private url: string = 'http://localhost:8080/contributes'

  constructor(private http: HttpClient) {}

  public getContributes(): Observable<Contribute> {
    return this.http.get<Contribute>(this.url).pipe(
      response => response,
      error => error
    );
  }
}
