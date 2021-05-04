import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {Users} from '../../Model/Users';
import {UserService} from '../../Services/user.service';
import {AddToCartService} from '../../Services/add-to-cart.service'
import {CartProduct} from '../../Model/CartProduct';
import {Orders} from '../../Model/Orders';
import {OrderService} from '../../Services/order.service';
// validator for pincode
function PincodeValidator(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { pincode: true };
    }
    return null;
  };
}





@Component({
  selector: 'pm-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartUserProduct:CartProduct["Products"];
  cartUserDetail:CartProduct;
  cartUser:CartProduct[]=[];
  imageWidth:number=50;
  imageMargin:number=2;

  customForm: FormGroup;
  errorMessage: string;
  isloginError :boolean;
  userData:Users[]=[];
  user=new Users();
  orderData=new Orders;
  loginDetailChecks:boolean;
  email:string;
  constructor(private fb: FormBuilder ,
      private router:Router,
    private toastr: ToastrService,
    private addtocart:AddToCartService,
    private orderservice:OrderService,
 ) { }
// to get the cart data for payment for which user has to place order
  ngOnInit(): void 
  {
    
//    window.sessionStorage.removeItem('checkout');
    this.email=window.sessionStorage.getItem('userEmail');

    

    this.addtocart.getCartProduct().subscribe
    ({
    next:products=>
    {
      this.cartUser=products;
      this.getCartUser(this.cartUser);
    },
      error:err=>this.errorMessage=err
  
    });   
    this.customForm=this.fb.group(
      {
        Name:['',[Validators.required,Validators.pattern("[a-zA-Z ]*"),Validators.minLength(3)]],
        Email:['',[Validators.required,Validators.email]],
        State:['',[Validators.required,Validators.pattern("[a-zA-Z ]*"),Validators.minLength(3)]],
        City:['',[Validators.required,Validators.pattern("[a-zA-Z ]*"),Validators.minLength(3)]],
        Address:['',[Validators.required]],
        Pincode:['',[Validators.required,PincodeValidator(100000,999999)]],
        phoneno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      })
  }
  // tp navigate back to product page
  onBack()
  {
    this.router.navigate(['product']);

  }
  // if user click logout then it go back to login page
  checkforChange():void
  {
    if(window.sessionStorage.getItem('userEmail')==null)
    {
            this.toastr.error("this operation require login","");
      this.router.navigate(['login']);
    }
  }

  // to get cart user whom have to make payment
  getCartUser(user:CartProduct[]):void
  {
    user.forEach((data)=>
    {
      if(data.UserEmail==this.email)
      {
        this.cartUserDetail=data;
        this.cartUserProduct=data.Products;
      }
    }
    )
   
  }
  /// this function recieve the funtion from from and save in in memory web api
  saved():void
  {
    if(this.customForm.valid)
    {
      if(this.customForm.dirty)
       {
              this.orderData.CustomerName=this.customForm.get('Name').value;
              this.orderData.CustomerUserEmail=this.customForm.get('Email').value;
              this.orderData.State=this.customForm.get('State').value;
              this.orderData.City=this.customForm.get('City').value;
              this.orderData.ShippingAddress=this.customForm.get('Address').value;
              this.orderData.Pincode=this.customForm.get('Pincode').value;
              this.orderData.PhoneNumber=this.customForm.get('phoneno').value;
              this.orderData.Products=[];
this.orderData.UserEmail=this.email;
              let today = new Date();
         
              this.orderData.OrderDate=today;
              this.cartUserProduct.forEach((products)=>
                {
                  this.orderData.Products.push(products)
                });
                this.orderservice.AddOrder(this.orderData).subscribe(
                  {
                    next:data=>{

                    },
                  error:err=>this.errorMessage=err},
                );
                
             





              this.addtocart.deleteProductById(this.cartUserDetail.id).subscribe({
              next:users=>{

              },
              error:err=>this.errorMessage=err},);        
      }else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please enter correctly.';
    }

  window.sessionStorage.setItem('checkout','checkoutone');
    this.router.navigate(['./orderdetail']);
  }



  // when save user it will navigate to home page
  onSaveComplete(): void 
  {
    this.router.navigate(['/product']);
  }
}
