/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapConfigService } from './map-config.service';

describe('MapConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapConfigService]
    });
  });

  it('should ...', inject([MapConfigService], (service: MapConfigService) => {
    expect(service).toBeTruthy();
  }));
});
