import { TestBed } from '@angular/core/testing';

import { RecomendedcommunityServiceService } from './recomendedcommunity-service.service';

describe('RecomendedcommunityServiceService', () => {
  let service: RecomendedcommunityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendedcommunityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
