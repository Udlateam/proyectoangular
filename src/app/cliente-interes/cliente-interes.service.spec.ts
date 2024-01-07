import { TestBed } from '@angular/core/testing';

import { ClienteInteresService } from './cliente-interes.service';

describe('ClienteInteresService', () => {
  let service: ClienteInteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteInteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
