import {Component, EventEmitter, Inject, InjectionToken, OnInit} from '@angular/core';

/**
 * 用于动态创建PortalChildComponent的时候传递参数
 */
export const PORTAL_CHILD_DATA = new InjectionToken<any>('PORTAL_CHILD_DATA');

@Component({
  selector: 'app-portal-child-component',
  template: `
        <h1>portal child show</h1>
        <button (click)="onButtonClick()">点击</button>
    `,
  styleUrls: ['./portal-child-component.component.scss']
})
export class PortalChildComponentComponent implements OnInit {

  public outEvent: EventEmitter<string>;

  constructor(@Inject(PORTAL_CHILD_DATA) public initData: any) {
    console.log(initData);
  }

  ngOnInit() {
  }

  /**
   * 用来测试把Portal里面的事件返回上去
   */
  onButtonClick() {
    if (this.outEvent != null) {
      this.outEvent.emit('child 里面被点击了');
    }
  }

}
