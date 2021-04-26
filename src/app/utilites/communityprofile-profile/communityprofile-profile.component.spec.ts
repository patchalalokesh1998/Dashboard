import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityprofileProfileComponent } from './communityprofile-profile.component';

describe('CommunityprofileProfileComponent', () => {
  let component: CommunityprofileProfileComponent;
  let fixture: ComponentFixture<CommunityprofileProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityprofileProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityprofileProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
