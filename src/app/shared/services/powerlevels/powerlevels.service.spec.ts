/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PowerlevelsService } from './powerlevels.service';

describe('PowerlevelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerlevelsService]
    });
  });

  it('should ...', inject([PowerlevelsService], (service: PowerlevelsService) => {
    expect(service).toBeTruthy();
  }));
});
