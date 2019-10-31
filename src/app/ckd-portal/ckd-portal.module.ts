import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CkdPortalComponent} from './ckd-portal.component';
import {RouterModule, Routes} from '@angular/router';
import {PortalComponentComponent} from './portal-component/portal-component.component';
import {PortalModule} from '@angular/cdk/portal';
import {PortalChildComponentComponent} from './portal-child-component/portal-child-component.component';
import {PortalTemplateComponent} from './portal-template/portal-template.component';
import {ToolTipDirective} from './portal-tool-tip/tool-tip.directive';
import {ToolTipComponent} from './portal-tool-tip/tool-tip.component';

const routes: Routes = [
  {
    path: '',
    component: CkdPortalComponent
  }
];

@NgModule({
  declarations: [
    CkdPortalComponent,
    PortalComponentComponent,
    PortalChildComponentComponent,
    PortalTemplateComponent,
    ToolTipComponent,
    ToolTipDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PortalModule
  ],
  entryComponents: [
    PortalChildComponentComponent,
    ToolTipComponent
  ]
})
export class CkdPortalModule {
}
