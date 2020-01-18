import { TestBed } from '@angular/core/testing';

import { TestServieService } from './test-servie.service';

describe('TestServieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestServieService = TestBed.get(TestServieService);
    expect(service).toBeTruthy();
  });
});
