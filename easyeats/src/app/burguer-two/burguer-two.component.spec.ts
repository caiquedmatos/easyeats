import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerTwoComponent } from './burguer-two.component';

describe('BurguerTwoComponent', () => {
  let component: BurguerTwoComponent;
  let fixture: ComponentFixture<BurguerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
