import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaThreeComponent } from './sobremesa-three.component';

describe('SobremesaThreeComponent', () => {
  let component: SobremesaThreeComponent;
  let fixture: ComponentFixture<SobremesaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesaThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremesaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
