import { Component, OnInit } from '@angular/core';
import {VirtualScrollDatasource} from './virtual-scroll-datasource';

@Component({
  selector: 'app-virtual-scroll-datasource',
  templateUrl: './virtual-scroll-datasource.component.html',
  styleUrls: ['./virtual-scroll-datasource.component.scss']
})
export class VirtualScrollDatasourceComponent implements OnInit {

  public ds = new VirtualScrollDatasource();

  constructor() { }

  ngOnInit() {
  }

}
