import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosFourComponent } from './pratos-four.component';

describe('PratosFourComponent', () => {
  let component: PratosFourComponent;
  let fixture: ComponentFixture<PratosFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
