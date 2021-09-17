import { TestBed } from '@angular/core/testing';

import { HotstreamService } from './hotstream.service';

describe('HotstreamService', () => {
  let service: HotstreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotstreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
