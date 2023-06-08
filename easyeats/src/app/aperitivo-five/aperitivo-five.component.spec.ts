import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivoFiveComponent } from './aperitivo-five.component';

describe('AperitivoFiveComponent', () => {
  let component: AperitivoFiveComponent;
  let fixture: ComponentFixture<AperitivoFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivoFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitivoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
