import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

/**
 * 横向滚动改变 orientation="horizontal".和改变css样式
 * The virtual-scroll viewport defaults to a vertical orientation,
 * but can also be set to orientation="horizontal".
 * When changing the orientation, ensure that the item are laid out horizontally via CSS.
 * To do this you may want to target CSS at .cdk-virtual-scroll-content-wrapper which is the wrapper element that contains the rendered content.
 */

@Component({
  selector: 'app-virtual-scroll-horizontal',
  templateUrl: './virtual-scroll-horizontal.component.html',
  styleUrls: ['./virtual-scroll-horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollHorizontalComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() {
  }

  ngOnInit() {
  }

}
