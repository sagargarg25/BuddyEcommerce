import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// home component to dispay navbar on every page
export class HomeComponent implements OnInit {

userEmail:string;
userName:string;
login:boolean;
logout:boolean;
siteLanguage:string='English';
siteLocale:string;
languageList=[
  { code :'en',label:'English'},
  { code :'fr',label:'French'},
  { code :'es',label:'Spanish'}
  
]

  constructor(private router:Router) { }

  ngOnInit(): void 
  {
   
    this.userEmail=window.sessionStorage.getItem('userEmail')
    if(this.userEmail==null)
    { 
      this.login=true;
      this.logout=false;

    }
    if(this.userEmail!=null)
    {

      this.login=false;
      this.logout=true;
this.siteLocale=window.location.pathname.split('/')[1];
console.log(this.siteLocale);
this.siteLanguage=this.languageList.find(f=>f.code===this.siteLocale).label;
console.log(this.siteLanguage);
}
   }
  
   ClickMe() :void
   { 
     this.router.navigate(['/login']);
   }
   logoutfunc():void
   {
     window.sessionStorage.removeItem('userEmail');
     
     this.login=true;
     this.logout=false;

   }
 

}
