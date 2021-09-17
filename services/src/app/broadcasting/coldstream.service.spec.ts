import { TestBed } from '@angular/core/testing';

import { ColdstreamService } from './coldstream.service';

describe('ColdstreamService', () => {
  let service: ColdstreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColdstreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
