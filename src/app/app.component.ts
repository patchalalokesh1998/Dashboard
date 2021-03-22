import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  mobileQuery: MediaQueryList;

  showFiller = false;
  private _mobileQueryListener: () => void;

  constructor(private media: MediaMatcher,changeDetectorRef: ChangeDetectorRef)
  {
   this.mobileQuery=media.matchMedia('(max-width: 600px)');
  //  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //  this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
