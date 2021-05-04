import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { LoginCheckComponent } from './login-check.component';

describe('LoginCheckComponent', () => {
  let component: LoginCheckComponent;
  let fixture: ComponentFixture<LoginCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ 
      ReactiveFormsModule,
      RouterTestingModule ,
      HttpClientTestingModule,
      ToastrModule.forRoot()
       ],
       providers: [
        
        {provide: ToastrService, useClass: ToastrService}
      ],
      declarations: [ LoginCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

//test case
  it("login Funtion",()=>
  {
    expect(component.loginCheck('sagar@gmail.com','sagar@123')).toBe(false);
  })
  
  it("login TITLE",()=>
  {
    expect(component.Title).toBe("Login");
  })

  it("login html",()=>
  {
    const data=fixture.nativeElement;
    expect(data.querySelector(".card-header").textContent).toContain("Login");
  })
    

});
