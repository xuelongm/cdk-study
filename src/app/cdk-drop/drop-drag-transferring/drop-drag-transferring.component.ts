import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-drag-transferring',
  templateUrl: './drop-drag-transferring.component.html',
  styleUrls: ['./drop-drag-transferring.component.scss']
})
export class DropDragTransferringComponent implements OnInit {

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    // 判断是否在相同容器中移动
    // previousContainer 获取移动Item的容器
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
