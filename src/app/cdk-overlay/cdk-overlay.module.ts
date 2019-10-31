import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {CdkOverlayComponent} from './cdk-overlay.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayPanelComponent} from './panel/overlay-panel.component';
import {PortalModule} from '@angular/cdk/portal';

const routes: Routes = [
  {
    path: '',
    component: CdkOverlayComponent
  }
];

@NgModule({
  declarations: [
    CdkOverlayComponent,
    OverlayPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayModule,
    PortalModule,
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    OverlayPanelComponent
  ]
})
export class CdkOverlayModule { }
