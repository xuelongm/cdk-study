import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTemplateComponent } from './portal-template.component';

describe('PortalTemplateComponent', () => {
  let component: PortalTemplateComponent;
  let fixture: ComponentFixture<PortalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
