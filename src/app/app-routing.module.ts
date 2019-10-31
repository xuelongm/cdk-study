import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkOverlayModule} from './cdk-overlay/cdk-overlay.module';
import {CkdPortalModule} from './ckd-portal/ckd-portal.module';
import {CdkPlatformModule} from './cdk-platform/cdk-platform.module';

const appRoutes: Routes = [
  {
    path: 'overlay',
    loadChildren: () => CdkOverlayModule
  },
  {
    path: 'portal',
    loadChildren: () => CkdPortalModule
  },
  {
    path: 'platform',
    loadChildren: () => CdkPlatformModule
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {
}
