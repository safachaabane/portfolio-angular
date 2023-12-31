import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { languageDetectGuard } from './language-detect.guard';

describe('languageDetectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => languageDetectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
