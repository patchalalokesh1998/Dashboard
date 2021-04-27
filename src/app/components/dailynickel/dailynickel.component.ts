import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {ServicesService} from "../../authservice/services.service";
@Component({
  selector: 'app-dailynickel',
  templateUrl: './dailynickel.component.html',
  styleUrls: ['./dailynickel.component.css']
})
export class DailynickelComponent implements OnInit,OnDestroy{
  mobileQuery: MediaQueryList;
  community:any;
  products:any;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private service:ServicesService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }


  ngOnInit(): void {
  this.service.getcommunity().subscribe((data)=>{console.log(data); this.community=data}, err=>console.log(err));
  this.service.getproductdetails().subscribe((data)=>{console.log(data); this.products=data}, err=>{console.log(err)})
}
  ngOnDestroy(): void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
