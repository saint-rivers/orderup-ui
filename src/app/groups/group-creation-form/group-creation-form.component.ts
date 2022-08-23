import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GroupRequest } from 'src/app/shared/models/group-request';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-group-creation-form',
  templateUrl: './group-creation-form.component.html',
  styleUrls: ['./group-creation-form.component.css'],
})
export class GroupCreationFormComponent implements OnInit {
  groupForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: [''],
  });

  req!: GroupRequest;

  constructor(private fb: FormBuilder, private groupService: GroupService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.req = <GroupRequest>this.groupForm.value;
    this.req.createdAt = new Date().toISOString();
    this.req.imageUrl = '';
    this.req.users = [];

    this.groupService.post(this.req).subscribe((res) => console.log(res));
  }
}
