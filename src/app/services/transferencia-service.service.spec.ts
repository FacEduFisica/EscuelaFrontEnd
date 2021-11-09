import { TestBed } from '@angular/core/testing';

import { TransferenciaServiceService } from './transferencia-service.service';

describe('TransferenciaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferenciaServiceService = TestBed.get(TransferenciaServiceService);
    expect(service).toBeTruthy();
  });
});
