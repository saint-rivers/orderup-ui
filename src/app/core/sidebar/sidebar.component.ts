import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private readonly oauthService: OAuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.oauthService.logOut();
  }
}
