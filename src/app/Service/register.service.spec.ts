import { TestBed } from '@angular/core/testing';

import { MemoService } from './memo.service';

describe('RegisterService', () => {
  let service: MemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
