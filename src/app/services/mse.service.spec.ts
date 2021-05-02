import { TestBed } from '@angular/core/testing';

import { MseService } from './mse.service';

describe('MseService', () => {
  let service: MseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
