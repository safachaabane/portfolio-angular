import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { languageGuard } from './language.guard';

describe('languageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => languageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
