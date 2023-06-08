import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosTwoComponent } from './pratos-two.component';

describe('PratosTwoComponent', () => {
  let component: PratosTwoComponent;
  let fixture: ComponentFixture<PratosTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
