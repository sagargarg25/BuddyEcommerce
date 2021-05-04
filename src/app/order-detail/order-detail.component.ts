import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {OrderService} from '../Services/order.service';
import {Orders} from '../Model/Orders';
@Component({
  selector: 'pm-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
// order detail component to show user its last order
export class OrderDetailComponent implements OnInit {
  products:Orders["Products"];
  date:any[];
  email: string;
  imageWidth:number=50;
  imageMargin:number=2;
  orderDetails: Array<Orders> = new Array();
  count :number=0;
  
  OneOrderDetail:Orders[]=[];
getFinalOrder:Orders;
  oneOrder=new Orders();
  errorMessage:string='';
  pageTitle:string= 'Your Last Order Detail ';
    constructor(private router:Router,
      private toastr: ToastrService,
      private orderservice:OrderService) { }
  // in this we get detail of last user
    ngOnInit(): void 
    {
      this.products=[];
          this.date=[];    
      this.email=window.sessionStorage.getItem('userEmail');
      this.orderservice.getProduct().subscribe({
        next:orderdata=>{
          this.orderDetails=orderdata;
         this.GetOrderInfo(this.orderDetails);
        
         
         this.OneOrderDetail.forEach(order=>
          {
            console.log(order.OrderDate);
            this.orderservice.getProductsbyID(order.id).subscribe(
              {
                
                next:data=>
                {
                  this.getFinalOrder=data[0] as Orders;
                  this.date.push(this.getFinalOrder.OrderDate);
                   
                 //console.log(this.getFinalOrder);
                 this.getFinalOrder.Products.forEach(producData=>
                  {
                    
                    this.products.push(producData);
                  })
                 
           
                },
                error:err=>this.errorMessage=err
              
              }
              
              );

          }


        );
        
        
        
        
        
        
        
        },
        error:err=>this.errorMessage=err
      });
  
    }

      


      GetOrderInfo(orderDetails:Orders[]):void
      {
        orderDetails.forEach(order=>
          {
            if(order.UserEmail==this.email)
            {
              this.OneOrderDetail.push(order);
       //       this.products=order.Products;
            }
          });
   
          this.OneOrderDetail.sort((a,b)=>
{
            return b.id-a.id;
          })
        }



    checkforChange():void
    {
      if(window.sessionStorage.getItem('userEmail')==null)
      {
              this.toastr.error("this operation require login","");
        this.router.navigate(['login']);
      }
    }
    onBack():void
    {
      
    //window.sessionStorage.removeItem('checkout');

      this.router.navigate(['product']);
    }
  }