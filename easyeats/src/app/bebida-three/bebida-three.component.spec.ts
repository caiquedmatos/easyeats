import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaThreeComponent } from './bebida-three.component';

describe('BebidaThreeComponent', () => {
  let component: BebidaThreeComponent;
  let fixture: ComponentFixture<BebidaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
