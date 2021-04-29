import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecommendedCommunitiesComponent } from './get-recommended-communities.component';

describe('GetRecommendedCommunitiesComponent', () => {
  let component: GetRecommendedCommunitiesComponent;
  let fixture: ComponentFixture<GetRecommendedCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRecommendedCommunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRecommendedCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
