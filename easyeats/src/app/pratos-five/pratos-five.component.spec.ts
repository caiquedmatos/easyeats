import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosFiveComponent } from './pratos-five.component';

describe('PratosFiveComponent', () => {
  let component: PratosFiveComponent;
  let fixture: ComponentFixture<PratosFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
