import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebAuthFeatureLoginModule} from "@myclass/web/auth/feature/login";
import {WebAuthFeatureRegisterModule} from "@myclass/web/auth/feature/register";

@NgModule({
  imports: [CommonModule, WebAuthFeatureLoginModule, WebAuthFeatureRegisterModule],
})
export class WebShellFeatureModule {
}
