import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollStrategiesComponent } from './virtual-scroll-strategies.component';

describe('VirtualScrollStrategiesComponent', () => {
  let component: VirtualScrollStrategiesComponent;
  let fixture: ComponentFixture<VirtualScrollStrategiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollStrategiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
