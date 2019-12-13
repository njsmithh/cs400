import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  newRetrieval() {
    return this.http.get('http://localhost:4000/ps6/spotify');
  }

}
