import { NgModule } from '@angular/core';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';  

import { LoginauthGuard } from '../auth/loginauth.guard';
import { OrderauthGuard } from '../auth/orderauth.guard';

// feature module which contain checkout component and all the files require to add to cart

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderDetailComponent
  ],
  imports: [
    RouterModule.forChild(
      [        
        {path:'checkout',canActivate:[LoginauthGuard,OrderauthGuard],component:CheckoutComponent},
      {path:'orderdetail',canActivate:[LoginauthGuard],component:OrderDetailComponent},

      ]
    ), SharedModule

        
  ]
})
export class CheckoutModule { }
