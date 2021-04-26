import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit,OnDestroy{
  mobileQuery: MediaQueryList;
  px=0;
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
  //  right()
  //  {
  //    if(this.px<0)
  //    {
  //     this.px=this.px+216;
  //     document.getElementById('scroll').style.left=this.px+"px";
  //    }
     
   
  //  }
  //  left()
  //  {
  //   if(this.px>=-(216*5))
  //   {
  //     this.px=this.px-216;
  //     document.getElementById('scroll').style.left=this.px+"px";
  //   }
  //  }

   public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollLeft-= 150;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollLeft+= 150;
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

