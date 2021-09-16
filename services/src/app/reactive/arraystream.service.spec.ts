import { TestBed } from '@angular/core/testing';

import { ArraystreamService } from './arraystream.service';

describe('ArraystreamService', () => {
  let service: ArraystreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraystreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
