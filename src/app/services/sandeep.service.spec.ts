import { TestBed } from '@angular/core/testing';

import { SandeepService } from './sandeep.service';

describe('SandeepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SandeepService = TestBed.get(SandeepService);
    expect(service).toBeTruthy();
  });
});
