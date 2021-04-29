import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecomendedcommunityServiceService {
  recommendedCommunityUrl:any="http://localhost:4200/api/get-recomend-communities"
  constructor(private http:HttpClient) { }
  getRecomendedCommunity():Observable<any>
  {
    let params= new FormData();
    params.append("server_key","9f1c90293f914071950e63cc6be50e75");
    params.append("limit","10");
    params.append("pageNo","1");
    params.append("currentLocation","hyderabad");
    params.append("access_token", "dca01463b28685e872f58266ec3c76d0acc4ce80e46c414677bbde34dc364616c21a57a0982708247bb7a62681a8a0f94ab424b06d172ca3");
    console.log(params.get("pageNo"));
    // let headers={
    //   // 'Access-Control-Allow-Origin':'*',
    //   'Cache-Control': 'no-cache',
    //   'Pragma': 'no-cache'

    // }
    return this.http.post(this.recommendedCommunityUrl,params);
  }
}
