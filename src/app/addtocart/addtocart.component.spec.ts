import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AddtocartComponent } from './addtocart.component';

describe('AddtocartComponent', () => {
  let component: AddtocartComponent;
  let fixture: ComponentFixture<AddtocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ,HttpClientTestingModule,ToastrModule.forRoot()
      ],
      providers: [
       
       {provide: ToastrService, useClass: ToastrService}
     ],
      declarations: [ AddtocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
