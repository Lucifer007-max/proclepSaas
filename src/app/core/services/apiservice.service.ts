import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  baseUrl:string = `${environment.baseUrl}`
  constructor(private http : HttpClient) { }

    login(username: string, password: string): Observable<string> {
      return this.http.post<string>(`${this.baseUrl}/auth/login`, { username, password });
    }
}
