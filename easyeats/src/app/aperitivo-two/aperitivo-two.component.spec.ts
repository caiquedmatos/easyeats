import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivoTwoComponent } from './aperitivo-two.component';

describe('AperitivoTwoComponent', () => {
  let component: AperitivoTwoComponent;
  let fixture: ComponentFixture<AperitivoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivoTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitivoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
