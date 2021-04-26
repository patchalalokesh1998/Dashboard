import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SericeService {

  constructor(private http:HttpClient) { 

  }
  getgraph1()
  {
    return this.http.get('/assets/movie_rating.csv',{responseType:"text"})
  }
  getsalesforcedata():Observable<any>
  {
    return this.http.get('http://localhost:3001/getsalesforce/details');
  }
}
