import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUserInfoComponent } from './one-user-info.component';

describe('OneUserInfoComponent', () => {
  let component: OneUserInfoComponent;
  let fixture: ComponentFixture<OneUserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneUserInfoComponent]
    });
    fixture = TestBed.createComponent(OneUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
