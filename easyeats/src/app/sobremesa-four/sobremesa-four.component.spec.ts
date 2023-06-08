import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaFourComponent } from './sobremesa-four.component';

describe('SobremesaFourComponent', () => {
  let component: SobremesaFourComponent;
  let fixture: ComponentFixture<SobremesaFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesaFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremesaFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
