import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {CartProduct} from '../Model/CartProduct';
import {ProductService} from '../Services/product.service';
import {AddToCartService} from '../Services/add-to-cart.service';
import { Subscription } from 'rxjs';
import {Products} from '../Model/Products';
@Component({
  selector: 'pm-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit
{
  addCartButton:boolean;
  products:CartProduct["Products"];
  cartUser:CartProduct;
  cartItems:CartProduct[]=[];
  productDetail:Products;


  errorMessage:string='';
  sub!:Subscription;  
  imageWidth:number=50;
  imageMargin:number=2;
  productPrice:number=0;
  productTotal:number=0;
 
  email:string;
  pageTitle:string="cartProduct";
  subone: Subscription;
subtwo:Subscription;
  
  constructor(private router:Router ,
    private toastr: ToastrService,
    private addtocart:AddToCartService,
    private productservice:ProductService) { }

  ngOnInit(): void 
  {
        this.email=sessionStorage.getItem('userEmail'); 
        this.addtocart.getCartProduct().subscribe
        ({
        next:products=>
        {
          this.cartItems=products;
          this.getCartUser(this.cartItems);
          this.products=this.cartUser.Products;
        },
          error:err=>this.errorMessage=err
      
        });
  
  }
// this function will get cureent user cart detail
  getCartUser(user:CartProduct[]):void
  {
    user.forEach((data)=>
    {
      if(data.UserEmail==this.email)
      {
        data.Products.forEach(dataprice=>
          {
          this.productPrice+=dataprice.price
          this.productTotal+=dataprice.productquantity;  
        }
          )
        this.cartUser=data;
      }
    }
    )
    console.log(this.cartUser);
  }
  // this function used if used logout then it reach to home page
  checkforChange():void
  {
    if(window.sessionStorage.getItem('userEmail')==null)
    {
      this.toastr.error("this operation require login","");
      this.router.navigate(['login']);
    }
  }

  // this complete function contion add button functionality in add to cart
  // if user click button then quantity of product minuby 1 and add it to the cart of product
  addCartItem(id:number)
  {
    //for getting product from all products 
       this.sub =this.productservice.getProductsbyID(id).subscribe({         
        next:products=>{
          this.productDetail=products[0] as Products;
         this.cartUser.Products.forEach(dataCart=>
          {
            if(this.productDetail.productquantity>0)
            {
               
              
            
            if(dataCart.id==id)
            {
              dataCart.price+=this.productDetail.price;
                
              this.subone=this.addtocart.updateProduct(this.cartUser).subscribe
                ({
                  
                next: () => console.log('s'),
                error: err => this.errorMessage = err

                });
              
               console.log(this.productDetail);
              
               this.productDetail.productquantity-=1;
               
               if(this.productDetail.productquantity==0)
               {
                this.toastr.error("After this you cannot add more product","");
                
                
                this.productTotal=this.productTotal;
                this.productPrice=this.productPrice;
                
              this.subtwo=this.productservice.updateProductById(this.productDetail)
              .subscribe({
                next: () => {},
                error: err => this.errorMessage = err
              });
                return;
              
               }
               dataCart.productquantity+=1;
              
               this.productTotal+=1;
               this.productPrice+=this.productDetail.price;
             
            
              
               
          
              
               console.log(this.productDetail.productquantity);

              this.subtwo=this.productservice.updateProductById(this.productDetail)
              .subscribe({
                next: () => {},
                error: err => this.errorMessage = err
              });
          
            //break;
            }
          }   
          else
          {
            this.toastr.error("you cannot add more product","");
               
          }        
          })

        },
      error:err=>this.errorMessage=err
    });
  

  
  }
  
  // this complete function contion minus button functionality in add to cart
  // if user click button then quantity of product plus 1 and minus it to the cart of product
  minusCartItem(id:number)
  {         
    this.sub =this.productservice.getProductsbyID(id).subscribe({
      next:products=>{
        this.productDetail=products[0] as Products;
        
        this.cartUser.Products.forEach(dataCart=>
          {
            if(dataCart.id==id)
            {
              dataCart.productquantity-=1;              
              dataCart.price-=this.productDetail.price;         
              this.addtocart.updateProduct(this.cartUser).subscribe
                ({             
                next: () => {},
                error: err => this.errorMessage = err

                });
                this.productDetail.productquantity+=1; 
                if(dataCart.productquantity==0)
                {
                  this.productTotal-=1;
                  this.productPrice-=this.productDetail.price;

                 this.toastr.error("you cannot remove more product","");
                 
                 console.log("id "+dataCart.id);
                 var index=this.cartUser.Products.indexOf(dataCart);
                 console.log(index);
                 this.cartUser.Products.splice(index,1);
                console.log(this.cartUser);
                this.addtocart.updateProduct(this.cartUser)
                .subscribe({
                  next: () => {},
                  error: err => this.errorMessage = err
                });
                 return;
 
                }
               
              
              this.productPrice-=this.productDetail.price;
             
             
              this.productTotal-=1;
      
              console.log(this.productDetail.productquantity);

              this.productservice.updateProductById(this.productDetail)
              .subscribe({
                next: () => {},
                error: err => this.errorMessage = err
              });
          

            }
           
          })
        },
      error:err=>this.errorMessage=err
    });
  }
  // tp navigate back to product page
  onBack()
  {
    this.router.navigate(['product']);

  }
  // to navigate to checkout for payment
  cheoukout()
  {
    if(this.productTotal==0)
    {
      this.toastr.error("you cannot checkout");
      return;
    }
    window.sessionStorage.setItem('checkout','checkout');

    this.router.navigate(['checkout']);
  }
  
  ngOnDestroy()
  {
    // this.sub.unsubscribe();
    // this.subone.unsubscribe();
    // this.subtwo.unsubscribe();
  }
  
}
