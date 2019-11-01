import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragCustomizingComponent } from './drop-drag-customizing.component';

describe('DropDragCustomizingComponent', () => {
  let component: DropDragCustomizingComponent;
  let fixture: ComponentFixture<DropDragCustomizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragCustomizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragCustomizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
