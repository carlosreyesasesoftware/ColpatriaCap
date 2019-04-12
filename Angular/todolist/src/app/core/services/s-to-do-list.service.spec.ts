import { TestBed } from '@angular/core/testing';

import { SToDoListService } from './s-to-do-list.service';

describe('SToDoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SToDoListService = TestBed.get(SToDoListService);
    expect(service).toBeTruthy();
  });
});
