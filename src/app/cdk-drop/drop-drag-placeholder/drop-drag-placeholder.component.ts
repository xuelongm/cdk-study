import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * 占位符
 */

@Component({
  selector: 'app-drop-drag-placeholder',
  templateUrl: './drop-drag-placeholder.component.html',
  styleUrls: ['./drop-drag-placeholder.component.scss']
})
export class DropDragPlaceholderComponent implements OnInit {

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  constructor() { }

  ngOnInit() {
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
