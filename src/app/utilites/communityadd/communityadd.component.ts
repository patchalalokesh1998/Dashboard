import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-communityadd',
  templateUrl: './communityadd.component.html',
  styleUrls: ['./communityadd.component.css']
})
export class CommunityaddComponent implements  OnInit,OnDestroy{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
