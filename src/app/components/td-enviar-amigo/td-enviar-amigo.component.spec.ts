import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdEnviarAmigoComponent } from './td-enviar-amigo.component';

describe('TdEnviarAmigoComponent', () => {
  let component: TdEnviarAmigoComponent;
  let fixture: ComponentFixture<TdEnviarAmigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdEnviarAmigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdEnviarAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
