import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-communityprofile',
  templateUrl: './communityprofile.component.html',
  styleUrls: ['./communityprofile.component.css']
})
export class CommunityprofileComponent implements OnInit {
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
