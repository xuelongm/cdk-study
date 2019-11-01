import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragBaseComponent } from './drop-drag-base.component';

describe('DropDragBaseComponent', () => {
  let component: DropDragBaseComponent;
  let fixture: ComponentFixture<DropDragBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
