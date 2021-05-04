import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable, throwError } from "rxjs";

import {catchError,tap} from 'rxjs/operators';
import { ProductCategory } from "../Model/ProductCategory";
import {Products} from '../Model/Products';


@Injectable({
  providedIn: 'root'
})
// to hanlde to query for product table
export class ProductService {

 private productUrl;
  constructor(private http:HttpClient){}
  // to get all query
  getCategory():Observable<ProductCategory[]>
    {
     this.productUrl='app/ProductCategory'
       return this.http.get<ProductCategory[]>(this.productUrl).pipe(
          tap(),
          catchError(this.handleError)
        );   
    }
    // to get all product
    getProduct():Observable<Products[]>
    {
      this.productUrl='app/Products';
      
       return this.http.get<Products[]>(this.productUrl).pipe(
          tap(),
          catchError(this.handleError)
        );   
    }
    //get product by id
    getProductsbyID(id:number)
    {   
      this.productUrl = 'app/Products?id=';
        return this.http.get(this.productUrl+id)
    }
// update product by id
    updateProductById(data: Products): Observable<Products> {
      console.log(data);
      this.productUrl='app/Products';
      //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.productUrl}/${data.id}`;
      return this.http.put<Products>(url, data)
        
    }
// handle error

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
