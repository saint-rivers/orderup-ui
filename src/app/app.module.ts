import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthConfigService } from 'src/app/shared/services/auth-config.service';
import {
  authConfig,
  OAuthModuleConfig,
} from 'src/app/shared/config/auth.config';

import { OAuthModule, AuthConfig } from 'angular-oauth2-oidc';

export function init_app(authConfigService: AuthConfigService) {
  return () => authConfigService.initAuth();
}

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
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:9191/api/v1/orders'],
        sendAccessToken: true,
      },
    }),
  ],
  providers: [
    AuthConfigService,
    {
      provide: AuthConfig,
      useValue: authConfig, // this holds config for issuer, clientId, etc.
    },
    // OAuthModuleConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AuthConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
