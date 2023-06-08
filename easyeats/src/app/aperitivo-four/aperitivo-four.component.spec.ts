import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivoFourComponent } from './aperitivo-four.component';

describe('AperitivoFourComponent', () => {
  let component: AperitivoFourComponent;
  let fixture: ComponentFixture<AperitivoFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivoFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitivoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
