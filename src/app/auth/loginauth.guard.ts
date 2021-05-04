import { Injectable } from '@angular/core';
import { Router ,CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginauthGuard implements CanActivate {
  constructor( private route: Router) { }
    
    canActivate(): boolean {
  //if that user does not get on that page then show an alert message
 
  
  if (window.sessionStorage.getItem('userEmail') === null ) {
      window.alert('You don\'t have permission to view this page.You Need To Log In');
      window.sessionStorage.clear();
      this.route.navigate(['/login']);
      return false;
      } else {
      return true;
      }
    }  
}

