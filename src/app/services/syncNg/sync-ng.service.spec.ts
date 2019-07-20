import { TestBed } from '@angular/core/testing';

import { SyncNgService } from './sync-ng.service';

describe('SyncNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncNgService = TestBed.get(SyncNgService);
    expect(service).toBeTruthy();
  });
});
