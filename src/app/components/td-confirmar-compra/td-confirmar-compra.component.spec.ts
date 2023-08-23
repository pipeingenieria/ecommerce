import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdConfirmarCompraComponent } from './td-confirmar-compra.component';

describe('TdConfirmarCompraComponent', () => {
  let component: TdConfirmarCompraComponent;
  let fixture: ComponentFixture<TdConfirmarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdConfirmarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdConfirmarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
