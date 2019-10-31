import {Component, OnInit} from '@angular/core';
import {getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior} from '@angular/cdk/platform';

@Component({
  selector: 'app-cdk-platform',
  templateUrl: './cdk-platform.component.html',
  styleUrls: ['./cdk-platform.component.scss']
})
export class CdkPlatformComponent implements OnInit {

  /**
   * 获取支持的输入类型
   */
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  /**
   * 是否支持被动事件监听器
   */
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  /**
   * 是否支持滑动行为
   */
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(private platform: Platform) {
  }

  ngOnInit() {
  }

}
