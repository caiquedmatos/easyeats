import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerOneComponent } from './burguer-one.component';

describe('BurguerOneComponent', () => {
  let component: BurguerOneComponent;
  let fixture: ComponentFixture<BurguerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
