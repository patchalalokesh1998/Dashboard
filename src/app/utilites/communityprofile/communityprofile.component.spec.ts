import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityprofileComponent } from './communityprofile.component';

describe('CommunityprofileComponent', () => {
  let component: CommunityprofileComponent;
  let fixture: ComponentFixture<CommunityprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
