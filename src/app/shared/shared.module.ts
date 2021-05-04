import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// shared module to share comman features with other

@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
       
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    HomeComponent,
    ReactiveFormsModule
    
  ]
})
export class SharedModule { }
