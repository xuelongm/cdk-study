import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPlatformComponent } from './cdk-platform.component';

describe('CdkPlatformComponent', () => {
  let component: CdkPlatformComponent;
  let fixture: ComponentFixture<CdkPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
