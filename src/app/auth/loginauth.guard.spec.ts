import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginauthGuard } from './loginauth.guard';

describe('LoginauthGuard', () => {
  let guard: LoginauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule]});
    guard = TestBed.inject(LoginauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
