import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import {HttpClientModule} from '@angular/common/http';
import { AddToCartService } from './add-to-cart.service';

describe('AddToCartService', () => {
  let service: AddToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    
    service = TestBed.inject(AddToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
