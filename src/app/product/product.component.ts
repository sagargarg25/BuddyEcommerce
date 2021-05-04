import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCategory } from '../Model/ProductCategory';
import {Products} from '../Model/Products';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// this module list the component and filter it on basis of product name
export class ProductComponent implements OnInit {
  pageTitle :string='Product List!';
  imageWidth:number=50;
  imageMargin:number=2;
  sub!:Subscription;
  subtwo!:Subscription;
  errorMessage:string='';
  category:ProductCategory[]=[];
    productID:Number;
  filteredProducts:Products[]=[];
  categoryFilter:Products[]=[];
  product:Products[]=[];

  private _listFilter:string= '';

  get listFilter():string
{
  return this._listFilter;
}

set listFilter(value:string)
{
  this._listFilter= value;
 // console.log('In settle',value );
  this.filteredProducts=this.performFilter(value);


}
  constructor(private productService:ProductService) { }
 // to perform filter on basis of product name
  performFilter(filteredby:string):Products[]
  {
    filteredby=filteredby.toLocaleLowerCase();
    return this.product.filter((product:Products)=>
    product.productName.toLocaleLowerCase().includes(filteredby));
  }
  ngOnInit(): void {
    window.sessionStorage.removeItem('checkout');

    this.sub= this.productService.getCategory().subscribe({
      next:categorydata=>{
        this.category=categorydata;
  
      },
      error:err=>this.errorMessage=err
    });
    this.subtwo =this.productService.getProduct().subscribe({
      next:products=>{
        this.product=products;
        this.filteredProducts=this.product
   
      },
      error:err=>this.errorMessage=err
    });

this.getCategoryProduct(this.productID);
}
  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.subtwo.unsubscribe();
  }
  getCategoryProduct(id:Number) : any
  { 
  //  console.log(id);
    this.filteredProducts=this.product.filter((product:Products)=>
    product.ProductCategoryid==id)

  }
}
