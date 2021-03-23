import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;

  showFiller = false;
  private _mobileQueryListener: () => void;

  constructor(private media: MediaMatcher,changeDetectorRef: ChangeDetectorRef)
  {
    this.mobileQuery=media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
  }

}
