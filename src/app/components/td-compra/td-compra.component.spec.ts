import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCompraComponent } from './td-compra.component';

describe('TdCompraComponent', () => {
  let component: TdCompraComponent;
  let fixture: ComponentFixture<TdCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
