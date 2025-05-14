import { TestBed } from '@angular/core/testing';

import { ProvinciaMunicipioService } from './provincia-municipio.service';

describe('ProvinciaMunicipioService', () => {
  let service: ProvinciaMunicipioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciaMunicipioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
