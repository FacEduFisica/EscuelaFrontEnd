import { TestBed } from '@angular/core/testing';

import { AdmiService } from './admi.service';

describe('AdmiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmiService = TestBed.get(AdmiService);
    expect(service).toBeTruthy();
  });
});
