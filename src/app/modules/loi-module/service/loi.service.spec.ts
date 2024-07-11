/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoiService } from './loi.service';

describe('Service: Dashboard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoiService]
    });
  });

  it('should ...', inject([LoiService], (service: LoiService) => {
    expect(service).toBeTruthy();
  }));
});
