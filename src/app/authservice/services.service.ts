import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url="https://stg2.dailynickel.com/api/get-community";
  producturl="https://stg2.dailynickel.com/api/get-products"
  constructor(private http:HttpClient) { }
  getcommunity():Observable<any>
  {
    let params= new FormData();
    params.append("server_key","9f1c90293f914071950e63cc6be50e75");
    params.append("limit","10");
    params.append("pageNo","1");
    params.append("fetch","groups");
    params.append("access_token", "dca01463b28685e872f58266ec3c76d0acc4ce80e46c414677bbde34dc364616c21a57a0982708247bb7a62681a8a0f94ab424b06d172ca3");
    console.log(params.get("pageNo"))  
    return this.http.post(this.url,params);
  }
  getproductdetails():Observable<any>
  {
    let params=new FormData();
    params.append('server_key', "9f1c90293f914071950e63cc6be50e75");
    params.append('lat','17.3850');
    params.append('lng', '78.4867');
    params.append('access_token', 'dca01463b28685e872f58266ec3c76d0acc4ce80e46c414677bbde34dc364616c21a57a0982708247bb7a62681a8a0f94ab424b06d172ca3');
    params.append('limit', '35');
    params.append('category_id', '');
    params.append('price_min', '');
    params.append('price_max', '');
    params.append('group_id','');
    params.append('groupsingle', '');
    params.append('excludedids', '')
    return this.http.post(this.producturl, params);
  }
  
}
