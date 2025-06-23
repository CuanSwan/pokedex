import { TestBed } from '@angular/core/testing';

import { ImgloadingService } from './imgloading.service';

describe('ImgloadingService', () => {
  let service: ImgloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
