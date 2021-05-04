import { Injectable } from '@angular/core';
import {  Router,CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderauthGuard implements CanActivate {
  constructor(  private route: Router) { }
    
  canActivate(): boolean {
//if that user does not get on that page then show an alert message


if (window.sessionStorage.getItem('checkout') === null ) {
    window.alert('You don\'t have permission to view this page');
    window.sessionStorage.removeItem('checkout');
    this.route.navigate(['/product']);
    return false;
    } else {
    return true;
    }
  }
  }