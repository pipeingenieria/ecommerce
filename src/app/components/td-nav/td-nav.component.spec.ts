import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdNavComponent } from './td-nav.component';

describe('TdNavComponent', () => {
  let component: TdNavComponent;
  let fixture: ComponentFixture<TdNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
