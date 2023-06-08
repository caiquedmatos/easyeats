import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioBebidaComponent } from './cardapio-bebida.component';

describe('CardapioBebidaComponent', () => {
  let component: CardapioBebidaComponent;
  let fixture: ComponentFixture<CardapioBebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioBebidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
