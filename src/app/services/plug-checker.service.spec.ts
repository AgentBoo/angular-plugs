import { TestBed } from '@angular/core/testing';

import { PlugCheckerService } from './plug-checker.service';

describe('PlugCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlugCheckerService = TestBed.get(PlugCheckerService);
    expect(service).toBeTruthy();
  });
});
