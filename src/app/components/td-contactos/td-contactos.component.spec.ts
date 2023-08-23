import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdContactosComponent } from './td-contactos.component';

describe('TdContactosComponent', () => {
  let component: TdContactosComponent;
  let fixture: ComponentFixture<TdContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
