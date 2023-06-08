import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerFourComponent } from './burguer-four.component';

describe('BurguerFourComponent', () => {
  let component: BurguerFourComponent;
  let fixture: ComponentFixture<BurguerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
