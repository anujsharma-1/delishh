import { TestBed } from '@angular/core/testing';

import { PaymentHelpService } from './payment-help.service';

describe('PaymentHelpService', () => {
  let service: PaymentHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
