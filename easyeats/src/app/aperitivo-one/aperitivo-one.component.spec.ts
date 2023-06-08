import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivoOneComponent } from './aperitivo-one.component';

describe('AperitivoOneComponent', () => {
  let component: AperitivoOneComponent;
  let fixture: ComponentFixture<AperitivoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitivoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
