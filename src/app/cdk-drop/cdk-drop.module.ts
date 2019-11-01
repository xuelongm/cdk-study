import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CdkDropComponent } from './cdk-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DropDragBaseComponent } from './drop-drag-base/drop-drag-base.component';
import { DropDragBoundaryComponent } from './drop-drag-boundary/drop-drag-boundary.component';
import { DropDragListComponent } from './drop-drag-list/drop-drag-list.component';
import { DropDragTransferringComponent } from './drop-drag-transferring/drop-drag-transferring.component';
import { DropDragAreaComponent } from './drop-drag-area/drop-drag-area.component';
import { DropDragCustomizingComponent } from './drop-drag-customizing/drop-drag-customizing.component';
import { DropDragPlaceholderComponent } from './drop-drag-placeholder/drop-drag-placeholder.component';
import { DropDragDirectionComponent } from './drop-drag-direction/drop-drag-direction.component';

/**
 * 拖拽
 */

const routes: Routes = [
  {
    path: '',
    component: CdkDropComponent
  }
];


@NgModule({
  declarations: [
    CdkDropComponent,
    DropDragBaseComponent,
    DropDragBoundaryComponent,
    DropDragListComponent,
    DropDragTransferringComponent,
    DropDragAreaComponent,
    DropDragCustomizingComponent,
    DropDragPlaceholderComponent,
    DropDragDirectionComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ]
})
export class CdkDropModule {
}
