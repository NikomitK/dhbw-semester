import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'

import { LinkdataService } from './linkdata.service';

describe('LinkdataService', () => {
  let service: LinkdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LinkdataService]
  });
    service = TestBed.inject(LinkdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
