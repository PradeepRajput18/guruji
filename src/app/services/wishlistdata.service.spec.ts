import { TestBed } from '@angular/core/testing';

import { WishlistdataService } from './wishlistdata.service';

describe('WishlistdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishlistdataService = TestBed.get(WishlistdataService);
    expect(service).toBeTruthy();
  });
});
