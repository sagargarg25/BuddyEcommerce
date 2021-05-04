import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';  
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import {ProductData} from '../Data/product.data';
@NgModule({
  declarations: [  
    ProductComponent,
   
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [  
    
    //InMemoryWebApiModule.forRoot(ProductData),
    
    RouterModule.forChild(
      [
        {path:'product', component:ProductComponent}, 
        {path:'productdetail', component:ProductDetailComponent},
        {path:'' ,redirectTo:'product',pathMatch:'full'}
     

      ]
    ), SharedModule

  ]
})
export class ProductModule { }
