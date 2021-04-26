import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  mobileQuery: MediaQueryList;
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
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
