import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {CartProduct} from '../Model/CartProduct';
import {  Observable, throwError } from "rxjs";
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// add to cart service to perform all the operation of cart table
export class AddToCartService {

  private productUrl;
  constructor(private http:HttpClient) { }
// to get all cart product
  getCartProduct():Observable<CartProduct[]>
  {
   this.productUrl='app/CartProduct';
     return this.http.get<CartProduct[]>(this.productUrl).pipe(
        tap(),
        catchError(this.handleError)
      );   
  }
  // to add new cart product
  createProduct( cartData: CartProduct): Observable<CartProduct> {
    this.productUrl='app/CartProduct'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    cartData.id = null;
    return this.http.post<CartProduct>(this.productUrl, cartData, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

// to update the cart product
  updateProduct(cartData: CartProduct): Observable<CartProduct> {
    this.productUrl='app/CartProduct/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productUrl}/${cartData.id}`;
    return this.http.put<CartProduct>(url, cartData, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + cartData.id)),
        // Return the product on an update
        map(() => cartData),
        catchError(this.handleError)
      );
  }
  // to delete cart product
  deleteProductById(id:number)
  {
    this.productUrl='app/CartProduct/';

    return this.http.delete(this.productUrl+id) 

  }


// to handle eror
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
