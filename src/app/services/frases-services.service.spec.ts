import { TestBed } from '@angular/core/testing';

import { FrasesServicesService } from './frases-services.service';

describe('FrasesServicesService', () => {
  let service: FrasesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrasesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
