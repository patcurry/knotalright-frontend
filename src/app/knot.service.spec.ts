import { TestBed } from '@angular/core/testing';

import { KnotService } from './knot.service';

describe('KnotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnotService = TestBed.get(KnotService);
    expect(service).toBeTruthy();
  });
});
