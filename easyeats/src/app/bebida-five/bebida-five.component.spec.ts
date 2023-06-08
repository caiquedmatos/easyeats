import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaFiveComponent } from './bebida-five.component';

describe('BebidaFiveComponent', () => {
  let component: BebidaFiveComponent;
  let fixture: ComponentFixture<BebidaFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
