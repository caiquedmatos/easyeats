import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioHamburguerComponent } from './cardapio-hamburguer.component';

describe('CardapioHamburguerComponent', () => {
  let component: CardapioHamburguerComponent;
  let fixture: ComponentFixture<CardapioHamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioHamburguerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
