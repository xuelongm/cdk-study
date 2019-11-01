import { Component, OnInit } from '@angular/core';

/**
 * cdkDrag : 拖拽指令
 *  1. @Input('cdkDragBoundary') boundaryElement: string | ElementRef<HTMLElement> | HTMLElement
 *    节点选择器 如过不传应该body 如果传入的是字符串则按属性搜索
 *  2. @Input('cdkDragConstrainPosition') constrainPosition: (point: Point, dragRef: DragRef) => Point
 *    位置相关
 * CdkDropList 列表拖拽
 * CdkDragDrop 消息类型
 *  container 那个容器中的item被拖动
 *  currentIndex 当前位置
 *  distance 移动的距离
 *  isPointerOverContainer 放置item是，鼠标是否在容器上
 *  item
 *  previousContainer === container
 *  previousIndex 放置的位置
 */



@Component({
  selector: 'app-cdk-drop',
  templateUrl: './cdk-drop.component.html',
  styleUrls: ['./cdk-drop.component.scss']
})
export class CdkDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
