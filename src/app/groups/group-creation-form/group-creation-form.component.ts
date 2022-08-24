import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GroupRequest } from 'src/app/shared/models/group-request';
import { GroupService } from 'src/app/shared/services/group.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-creation-form',
  templateUrl: './group-creation-form.component.html',
  styleUrls: ['./group-creation-form.component.css'],
})
export class GroupCreationFormComponent implements OnInit {
  groupForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: [''],
    email: '',
  });

  selectedUsers: any[] = [];

  req!: GroupRequest;

  constructor(
    private fb: FormBuilder,
    private groupService: GroupService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    delete this.groupForm.value.email;
    this.req = <GroupRequest>this.groupForm.value;
    this.req.createdAt = new Date().toISOString();
    this.req.users = this.selectedUsers.map((user) => <string>user.id);

    console.log(this.req);

    this.groupService.post(this.req).subscribe((res) => {
      if (res === null) {
        Swal.fire('Order Created!', 'You clicked the button!', 'success').then(
          () => (window.location.href = 'http://localhost:4200/groups')
        );
      }
    });
  }

  onSearch() {
    const email = this.groupForm.value.email;
    this.userService.fetchByEmail(<string>email).subscribe((res) => {
      this.selectedUsers.push(res[0]);
    });
  }
}
