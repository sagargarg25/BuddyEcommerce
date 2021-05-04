import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { LoginCheckComponent } from './user/login-check/login-check.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { AddtocartModule } from './addtocart/addtocart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData} from './Data/users.data';
// first module to run in the application
@NgModule({
  declarations: [
    AppComponent,
    LoginCheckComponent,
    ],
  imports: [    
    BrowserModule,    
    HttpClientModule,
    InMemoryWebApiModule.forRoot(UserData),
    RouterModule.forRoot(
      [

        {path:'login',component:LoginCheckComponent},  
         {path:'**',redirectTo:'product',pathMatch:'full'}

       
      ]
    ),
    ProductModule,
    AddtocartModule,
    SharedModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
