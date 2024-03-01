import { TestBed } from '@angular/core/testing';

import { LinkdataService } from './linkdata.service';

describe('LinkdataService', () => {
  let service: LinkdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
