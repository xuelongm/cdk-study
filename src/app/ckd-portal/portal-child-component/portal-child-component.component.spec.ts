import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalChildComponentComponent } from './portal-child-component.component';

describe('PortalChildComponentComponent', () => {
  let component: PortalChildComponentComponent;
  let fixture: ComponentFixture<PortalChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
