import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable, throwError } from "rxjs";

import {catchError,tap} from 'rxjs/operators';
import { Orders} from '../Model/Orders';
@Injectable({
  providedIn: 'root'
})
// to perforom all the order table related  query here
export class OrderService 
{
   private productUrl;
   order:Array<Orders> = new Array();
  
   constructor(private http:HttpClient){}
  
  
  
  // to get all product from order table
  getProduct():Observable<Orders[]>
  {
    this.productUrl='app/Orders';
     return this.http.get<Orders[]>(this.productUrl).pipe(
        tap(),
        catchError(this.handleError)
      );   

  }
// to get product on on
  getProductsbyID(id:number)
  {   
    this.productUrl = 'app/Orders?id=';
      return this.http.get(this.productUrl+id)
  }
  AddOrder( orderData: Orders): Observable<Orders> {
    this.productUrl='app/Orders'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    orderData.id = null;
    return this.http.post<Orders>(this.productUrl, orderData, { headers })
      .pipe(
        tap(data => console.log('orderData: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }



// to handle error
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
