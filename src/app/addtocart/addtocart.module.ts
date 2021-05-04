import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginauthGuard } from '../auth/loginauth.guard';
import { AddtocartComponent } from './addtocart.component';


// feature module which contain add to cart component and all the files require to add to cart
@NgModule({
  declarations: [
    AddtocartComponent
  ],
  imports: [
    
    RouterModule.forChild(
[        
      {path:'addtocart',canActivate:[LoginauthGuard], component:AddtocartComponent},
     
      ]
    ),
    SharedModule
  ]

})
export class AddtocartModule { }
