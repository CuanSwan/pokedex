import { TestBed } from '@angular/core/testing';

import { AbilLoadingService } from '../abil-loading.service';

describe('AbilLoadingService', () => {
  let service: AbilLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
