import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosOneComponent } from './pratos-one.component';

describe('PratosOneComponent', () => {
  let component: PratosOneComponent;
  let fixture: ComponentFixture<PratosOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
