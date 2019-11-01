import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragTransferringComponent } from './drop-drag-transferring.component';

describe('DropDragTransferringComponent', () => {
  let component: DropDragTransferringComponent;
  let fixture: ComponentFixture<DropDragTransferringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDragTransferringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragTransferringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
