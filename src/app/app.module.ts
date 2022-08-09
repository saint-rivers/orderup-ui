import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    ItemFormComponent,
    SidebarComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
