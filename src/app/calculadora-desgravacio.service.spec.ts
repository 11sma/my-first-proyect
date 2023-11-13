import { TestBed } from '@angular/core/testing';

import { CalculadoraDesgravacioService } from './calculadora-desgravacio.service';

describe('CalculadoraDesgravacioService', () => {
  let service: CalculadoraDesgravacioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraDesgravacioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
