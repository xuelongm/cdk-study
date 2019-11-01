import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragDirectionComponent } from './drop-drag-direction.component';

describe('DropDragDirectionComponent', () => {
  let component: DropDragDirectionComponent;
  let fixture: ComponentFixture<DropDragDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
