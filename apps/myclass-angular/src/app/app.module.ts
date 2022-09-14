import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {WebAuthFeatureLoginModule} from "@myclass/web/auth/feature/login";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "libs/web/auth/feature/login/src/lib/login.component";
import {AppRoutingModule} from "apps/myclass-angular/src/app/app-routing.module";
import {WebShellFeatureModule} from "@myclass/web/shell/feature";


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule, WebShellFeatureModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
