import { TestBed } from '@angular/core/testing';

import { TranslateDetectService } from './translate-detect.service';

describe('TranslateDetectService', () => {
  let service: TranslateDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
