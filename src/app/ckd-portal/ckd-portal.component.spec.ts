import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkdPortalComponent } from './ckd-portal.component';

describe('CkdPortalComponent', () => {
  let component: CkdPortalComponent;
  let fixture: ComponentFixture<CkdPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkdPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkdPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
