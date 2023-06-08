import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaFiveComponent } from './sobremesa-five.component';

describe('SobremesaFiveComponent', () => {
  let component: SobremesaFiveComponent;
  let fixture: ComponentFixture<SobremesaFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesaFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremesaFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
