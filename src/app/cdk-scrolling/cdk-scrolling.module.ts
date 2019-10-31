import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkScrollingComponent} from './cdk-scrolling.component';
import {RouterModule, Routes} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { VirtualScrollStrategiesComponent } from './virtual-scroll-strategies/virtual-scroll-strategies.component';
import { VirtualScrollHorizontalComponent } from './virtual-scroll-horizontal/virtual-scroll-horizontal.component';
import { VirtualScrollDatasourceComponent } from './virtual-scroll-datasource/virtual-scroll-datasource.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: CdkScrollingComponent
  }
];

@NgModule({
  declarations: [
    CdkScrollingComponent,
    VirtualScrollStrategiesComponent,
    VirtualScrollHorizontalComponent,
    VirtualScrollDatasourceComponent,
    VirtualScrollComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule
  ],
  exports: [
    RouterModule
  ]
})
export class CdkScrollingModule {
}
