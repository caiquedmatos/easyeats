import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioPratosComponent } from './cardapio-pratos.component';

describe('CardapioPratosComponent', () => {
  let component: CardapioPratosComponent;
  let fixture: ComponentFixture<CardapioPratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioPratosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioPratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
