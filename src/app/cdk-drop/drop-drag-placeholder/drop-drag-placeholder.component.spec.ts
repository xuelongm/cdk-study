import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragPlaceholderComponent } from './drop-drag-placeholder.component';

describe('DropDragPlaceholderComponent', () => {
  let component: DropDragPlaceholderComponent;
  let fixture: ComponentFixture<DropDragPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
