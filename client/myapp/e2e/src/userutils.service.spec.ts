import { TestBed } from '@angular/core/testing';

import { UserutilsService } from './userutils.service';

describe('UserutilsService', () => {
  let service: UserutilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserutilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
