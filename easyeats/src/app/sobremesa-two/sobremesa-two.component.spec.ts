import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaTwoComponent } from './sobremesa-two.component';

describe('SobremesaTwoComponent', () => {
  let component: SobremesaTwoComponent;
  let fixture: ComponentFixture<SobremesaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesaTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremesaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
