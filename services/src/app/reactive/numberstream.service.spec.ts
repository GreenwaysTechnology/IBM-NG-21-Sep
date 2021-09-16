import { TestBed } from '@angular/core/testing';

import { NumberstreamService } from './numberstream.service';

describe('NumberstreamService', () => {
  let service: NumberstreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberstreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
