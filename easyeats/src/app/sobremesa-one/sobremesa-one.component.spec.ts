import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaOneComponent } from './sobremesa-one.component';

describe('SobremesaOneComponent', () => {
  let component: SobremesaOneComponent;
  let fixture: ComponentFixture<SobremesaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremesaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
