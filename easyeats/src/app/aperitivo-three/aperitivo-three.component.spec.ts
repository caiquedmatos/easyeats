import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivoThreeComponent } from './aperitivo-three.component';

describe('AperitivoThreeComponent', () => {
  let component: AperitivoThreeComponent;
  let fixture: ComponentFixture<AperitivoThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivoThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitivoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
