/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BackendAdapterService } from './backend-adapter.service';

describe('Service: BackendAdapter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendAdapterService]
    });
  });

  it('should ...', inject([BackendAdapterService], (service: BackendAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
