import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/shared/services/group.service';
import { Group } from '../../shared/models/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  sub = JSON.parse(localStorage.getItem('id_token_claims_obj')!).sub;

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.get().subscribe((res) => {
      this.groups = res.filter((it) => it.createdBy.id === this.sub);
    });
  }
}
