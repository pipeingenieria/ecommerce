import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdLoginComponent } from './td-login.component';

describe('TdLoginComponent', () => {
  let component: TdLoginComponent;
  let fixture: ComponentFixture<TdLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
