import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragAreaComponent } from './drop-drag-area.component';

describe('DropDragAreaComponent', () => {
  let component: DropDragAreaComponent;
  let fixture: ComponentFixture<DropDragAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
