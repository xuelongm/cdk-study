import { Component, OnInit } from '@angular/core';
import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {CustomVirtualScrollStrategies} from '../lib/custom-virtual-scroll-strategies';

/**
 * 用来设置缓存机制的
 */

@Component({
  selector: 'app-virtual-scroll-strategies',
  templateUrl: './virtual-scroll-strategies.component.html',
  styleUrls: ['./virtual-scroll-strategies.component.scss'],
  providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategies}]
})
export class VirtualScrollStrategiesComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() {
  }

  ngOnInit() {
  }

}
