import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityprofileChartsComponent } from './communityprofile-charts.component';

describe('CommunityprofileChartsComponent', () => {
  let component: CommunityprofileChartsComponent;
  let fixture: ComponentFixture<CommunityprofileChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityprofileChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityprofileChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
