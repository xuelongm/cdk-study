import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-panel',
  template: `
    <p class="wu-overlay-pane">Overlay展示</p>
  `,
  styles: [`
    .wu-overlay-pane {
      margin: 0;
      padding: 10px;
      border: 1px solid black;
      background-color: skyblue;
    }
  `],
  exportAs: 'overlayPanelComponent'
})
export class OverlayPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  init() {
    console.log('11111');
  }

}
