import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreationFormComponent } from './groups/group-creation-form/group-creation-form.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderListComponent } from './order/order-list/order-list.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderListComponent,
  },
  {
    path: 'n/orders',
    component: OrderFormComponent,
  },
  {
    path: 'orders/:id',
    component: OrderDetailsComponent,
  },
  {
    path: 'groups',
    component: GroupListComponent,
  },
  {
    path: 'n/groups',
    component: GroupCreationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
