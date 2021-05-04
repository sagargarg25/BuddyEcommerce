import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import {Users} from '../../Model/Users';
import {UserService} from '../../Services/user.service';

import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'pm-login-check',
  templateUrl: './login-check.component.html',
  styleUrls: ['./login-check.component.css']
})
export class LoginCheckComponent implements OnInit {
  Title:string="Login";
  customForm: FormGroup;
  errorMessage: string;
  isloginError :boolean;
  userData:Users[]=[];
  user=new Users();
  loginDetailChecks:boolean;
  constructor(private fb: FormBuilder ,
    private userService:UserService ,
    private router:Router,
   private toastr: ToastrService) { }

  ngOnInit(): void {
    this.customForm=this.fb.group(
      {
        Email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
       
      })
  }
  // save methodd when form insert the value
// to get user id and password and if correct then login to product page
  saved():void
  {
    if(this.customForm.valid)
    {
      if(this.customForm.dirty)
       {
              this.user.UserEmail=this.customForm.get('Email').value;
              this.user.UserPassword=this.customForm.get('password').value;
              this.userService.getUsers().subscribe({
              next:users=>
              {
                              this.userData=users;
                            this.loginDetailChecks=this.loginCheck(this.user.UserEmail,this.user.UserPassword);
                            if(this.loginDetailChecks==true)
                            {
                             window.sessionStorage.setItem('userEmail',this.user.UserEmail);
                             
                             this.router.navigate(['product']);
               
                            }
                            if(this.loginDetailChecks==false)
                            {
                              this.toastr.error("Incorrect credential", "error");
                              this.customForm.reset();
                            }

              },
              error:err=>this.errorMessage=err},);        
      }else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please enter correctly.';
    }
  }


  loginCheck(email:string,password:string):boolean
  {
     if((this.userData.filter((user:Users)=>
    user.UserEmail==email && user.UserPassword==password))[0]==null)
    {
    return false;
    }
    return true;
  }

  // when save user it will navigate to home page
  onSaveComplete(): void 
  {
    this.router.navigate(['/product']);
  }
}
