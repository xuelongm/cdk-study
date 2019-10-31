import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollHorizontalComponent } from './virtual-scroll-horizontal.component';

describe('VirtualScrollHorizontalComponent', () => {
  let component: VirtualScrollHorizontalComponent;
  let fixture: ComponentFixture<VirtualScrollHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
