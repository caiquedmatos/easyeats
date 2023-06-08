import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioSobremesasComponent } from './cardapio-sobremesas.component';

describe('CardapioSobremesasComponent', () => {
  let component: CardapioSobremesasComponent;
  let fixture: ComponentFixture<CardapioSobremesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioSobremesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioSobremesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
