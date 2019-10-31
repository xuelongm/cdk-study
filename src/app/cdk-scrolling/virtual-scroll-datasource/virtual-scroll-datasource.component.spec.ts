import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollDatasourceComponent } from './virtual-scroll-datasource.component';

describe('VirtualScrollDatasourceComponent', () => {
  let component: VirtualScrollDatasourceComponent;
  let fixture: ComponentFixture<VirtualScrollDatasourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollDatasourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
