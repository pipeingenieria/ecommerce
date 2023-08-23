import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdInicioComponent } from './td-inicio.component';

describe('TdInicioComponent', () => {
  let component: TdInicioComponent;
  let fixture: ComponentFixture<TdInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
