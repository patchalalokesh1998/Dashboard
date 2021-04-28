import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url="https://musing-wozniak-1a4f86.netlify.app/api/get-community";
  producturl="https://musing-wozniak-1a4f86.netlify.app/api/get-products";
  constructor(private http:HttpClient) { }
  getcommunity():Observable<any>
  {
    let params= new FormData();
    params.append("server_key","9f1c90293f914071950e63cc6be50e75");
    params.append("limit","10");
    params.append("pageNo","1");
    params.append("fetch","groups");
    params.append("access_token", "dca01463b28685e872f58266ec3c76d0acc4ce80e46c414677bbde34dc364616c21a57a0982708247bb7a62681a8a0f94ab424b06d172ca3");
    console.log(params.get("pageNo"));
    // let headers={
    //   // 'Access-Control-Allow-Origin':'*',
    //   'Cache-Control': 'no-cache',
    //   'Pragma': 'no-cache'

    // }
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
    params.append('excludedids', '');
    // let headers={
    //   'Access-Control-Allow-Origin':'*',
    
    // // }
    // let headers={
    //   // 'Access-Control-Allow-Origin':'*',
    //   'Cache-Control': 'no-cache',
    //   'Pragma': 'no-cache'

    // }
    return this.http.post(this.producturl, params);
  }
  
}

// Accept: application/json, text/plain, */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Connection: keep-alive
// Content-Length: 670
// Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryakLGktVDv1zUpiyA
// Host: stg2.dailynickel.com
// Origin: http://localhost:4200
// Referer: http://localhost:4200/
// sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"
// sec-ch-ua-mobile: ?1
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36



// Accept: application/json, text/plain, */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Cache-Control: no-cache
// Connection: keep-alive
// Content-Length: 670
// Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryLd9ZqUu7sDSlNApW
// Host: stg2.dailynickel.com
// Origin: http://localhost:4200
// Pragma: no-cache
// Referer: http://localhost:4200/
// sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"
// sec-ch-ua-mobile: ?1
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36