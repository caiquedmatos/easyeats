import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioJapaComponent } from './cardapio-japa.component';

describe('CardapioJapaComponent', () => {
  let component: CardapioJapaComponent;
  let fixture: ComponentFixture<CardapioJapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioJapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioJapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
