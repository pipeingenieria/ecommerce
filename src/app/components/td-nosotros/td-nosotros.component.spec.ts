import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdNosotrosComponent } from './td-nosotros.component';

describe('TdNosotrosComponent', () => {
  let component: TdNosotrosComponent;
  let fixture: ComponentFixture<TdNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
