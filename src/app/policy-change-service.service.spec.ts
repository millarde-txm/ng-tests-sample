import { TestBed } from '@angular/core/testing';

import { PolicyChangeServiceService } from './policy-change-service.service';

describe('PolicyChangeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyChangeServiceService = TestBed.get(PolicyChangeServiceService);
    expect(service).toBeTruthy();
  });
});
