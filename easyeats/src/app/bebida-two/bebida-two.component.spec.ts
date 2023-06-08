import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaTwoComponent } from './bebida-two.component';

describe('BebidaTwoComponent', () => {
  let component: BebidaTwoComponent;
  let fixture: ComponentFixture<BebidaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
