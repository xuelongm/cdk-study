import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkPlatformComponent} from './cdk-platform.component';
import {RouterModule, Routes} from '@angular/router';
import {PlatformModule} from '@angular/cdk/platform';

const routes: Routes = [
  {
    path: '',
    component: CdkPlatformComponent
  }
];

@NgModule({
  declarations: [CdkPlatformComponent],
  imports: [
    CommonModule,
    PlatformModule,
    RouterModule.forChild(routes)
  ]
})
export class CdkPlatformModule {
}
