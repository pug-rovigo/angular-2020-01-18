import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public async posts() {
    return await this.http.get('http://localhost:1337/posts/').toPromise();
  }
}
