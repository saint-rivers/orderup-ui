import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderListComponent } from './order/order-list/order-list.component';

const routes: Routes = [
  {
    path: "orders",
    component: OrderListComponent
  },
  {
    path: "n/orders",
    component: OrderFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
