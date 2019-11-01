import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragBoundaryComponent } from './drop-drag-boundary.component';

describe('DropDragBoundaryComponent', () => {
  let component: DropDragBoundaryComponent;
  let fixture: ComponentFixture<DropDragBoundaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragBoundaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragBoundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
