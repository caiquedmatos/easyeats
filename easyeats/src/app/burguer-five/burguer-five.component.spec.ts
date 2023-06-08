import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerFiveComponent } from './burguer-five.component';

describe('BurguerFiveComponent', () => {
  let component: BurguerFiveComponent;
  let fixture: ComponentFixture<BurguerFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
