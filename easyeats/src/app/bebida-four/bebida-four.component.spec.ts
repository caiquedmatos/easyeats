import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaFourComponent } from './bebida-four.component';

describe('BebidaFourComponent', () => {
  let component: BebidaFourComponent;
  let fixture: ComponentFixture<BebidaFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
