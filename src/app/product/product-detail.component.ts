import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AddToCartService} from '../Services/add-to-cart.service';
import {Products} from '../Model/Products';
import { ProductService } from '../Services/product.service';
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import {CartProduct} from '../Model/CartProduct';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
// this module is used to shoe the one product detail
export class ProductDetailComponent implements OnInit {

  pageTitle:string= 'Product Detail';
  product :Products[]|undefined=[];
  oneProduct:Products;
  newProduct:Products;

  currentCartUser:CartProduct;
  newCartUser=new CartProduct();
  cartItem:CartProduct[]|undefined=[];

  
   id:number;
   email:string;  
   sub!:Subscription;
 userExist:boolean=false;
  errorMessage:string='';
 
  constructor(private route:ActivatedRoute
                 ,private router:Router ,
                 private productService:ProductService,
                 private toastr: ToastrService,
                 private addtocart:AddToCartService)
     { }
  // this function is used toget a product on base of id it is life cycle hook of angular
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
        
    })  
  
    this.sub =this.productService.getProductsbyID(this.id).subscribe({
    next:products=>{
      this.oneProduct=products[0] as Products;
      

    },
    error:err=>this.errorMessage=err
  });



  this.addtocart.getCartProduct().subscribe({
    next:products=>{
    this.cartItem=products;
    },
    error:err=>this.errorMessage=err
  });
  

  
}
// to perform soemthing when component done is coding
ngOnDestroy()
{
  this.sub.unsubscribe();
 
}
onBack()
{

  this.router.navigate(['./product']);
}
// this function used to add product in cart if user doesnot login then it does not add in cart
//if login then product quantity decrease and cart product quantity increase
addToCart():void
  {
    
    this.email=window.sessionStorage.getItem('userEmail');
    if(this.email==null)
    { 
      this.toastr.error("Please login first ", "error");
     return;                       
    }
    if(this.oneProduct.productquantity==0)
    {
      this.toastr.error("sorry you cannot add this product"," ");
      return;
    }



        this.email=window.sessionStorage.getItem('userEmail');
        if(this.email==null)
        { 
          this.toastr.error("Please login first ", "error");
                                
        }
        if(this.email!=null)
        {
          this.router.navigate(['addtocart']);

        }
       this.userExist= this.checkUser(this.cartItem);
          if(this.userExist==true)
          {
            this.addUpdateCartProduct();
          
          }
          if(this.userExist==false)
          {
            this.addNewCartProduct();
          
          }
  

        }
  
// this function is used if usr add new product to the cart
        addNewCartProduct():void
        {
            this.newCartUser.UserEmail=this.email;
            this.newCartUser.Products=[];  
            var quantity= this.oneProduct.productquantity;
            this.oneProduct.productquantity=1;
            this.newCartUser.Products.push(this.oneProduct);
       
            this.addtocart.createProduct(this.newCartUser)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
            this.oneProduct.productquantity=quantity-1;;
           this.productService.updateProductById(this.oneProduct).subscribe
          (
            {
              next:()=>this.onSaveComplete(),
              error:err=>this.errorMessage=err
            }
          );
       }
    
    
    
    // this function is run when user has the product in cart and you add another one
         addUpdateCartProduct():void
        {
          var quantity=this.oneProduct.productquantity;
           
          var check;
          this.currentCartUser.Products.forEach((data)=>
          {
            this.oneProduct.productquantity=quantity-1;
            if(data.id==this.oneProduct.id)
            {
              check=1;
              data.productquantity=data.productquantity+1;
              data.price+=data.price;
            }
          })
          if(check==1)
          {
            
            this.addtocart.updateProduct(this.currentCartUser)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
          this.productService.updateProductById(this.oneProduct).subscribe
          (
            {
              next:()=>this.onSaveComplete(),
              error:err=>this.errorMessage=err
            }
          );
    
    
          return;
          }    
          this.oneProduct.productquantity=1;
          this.currentCartUser.Products.push(this.oneProduct);
          this.addtocart.updateProduct(this.currentCartUser)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
          this.oneProduct.productquantity= quantity;
          this.productService.updateProductById(this.oneProduct).subscribe
          (
            {
              next:()=>this.onSaveComplete(),
              error:err=>this.errorMessage=err
            }
          );
 
    }


// get get the cart user
    checkUser(cartData:CartProduct[]):boolean
    {
      var sagar;
      cartData.forEach((data)=>
      {
        console.log(data.UserEmail);
        console.log(this.email);
        if(data.UserEmail==this.email)
        {
          this.currentCartUser=data;

          console.log('ab to aaja');
          sagar="true";
          return sagar;
        }

      }  )
      if(sagar=="true")
      {
        return true;
      }
      
      return false;
    }

   
    onSaveComplete(): void {
    }
      }
