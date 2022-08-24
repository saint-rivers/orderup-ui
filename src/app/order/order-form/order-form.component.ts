import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Group } from 'src/app/shared/models/group';
import { OrderRequest } from 'src/app/shared/models/order-request';
import { GroupService } from 'src/app/shared/services/group.service';
import { OrderService } from 'src/app/shared/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm = this.fb.group({
    name: [`Order on ${new Date().toLocaleDateString()}`],
    description: [''],
    groupId: [0],
  });

  availableGroups: Group[] = [];

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.groupService.get().subscribe((res) => (this.availableGroups = res));
  }

  req!: OrderRequest;

  handleSubmit() {
    this.req = <OrderRequest>this.orderForm.value;
    this.req.requestedAt = new Date().toISOString();
    this.req.currency = 'USD';

    console.log(this.req);

    // const req: OrderRequest = {
    //   name: this.orderForm.value.orderName,
    //   description: this.orderForm.value.description,
    //   requestedAt: new Date().toISOString(),
    //   currency: 'USD',
    //   groupId: this.orderForm.value.groupId,
    // };
    this.orderService.post(this.req).subscribe((res) => {
      if (res.id !== null || res.id !== undefined) {
        Swal.fire('Order Created!', 'You clicked the button!', 'success').then(
          () => (window.location.href = 'http://localhost:4200/orders')
        );
      }
    });
  }
}
