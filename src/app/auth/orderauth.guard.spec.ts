import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderauthGuard } from './orderauth.guard';

describe('OrderauthGuard', () => {
  let guard: OrderauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule]});
    guard = TestBed.inject(OrderauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
