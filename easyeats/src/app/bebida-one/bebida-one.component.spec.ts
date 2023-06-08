import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaOneComponent } from './bebida-one.component';

describe('BebidaOneComponent', () => {
  let component: BebidaOneComponent;
  let fixture: ComponentFixture<BebidaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
