import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosThreeComponent } from './pratos-three.component';

describe('PratosThreeComponent', () => {
  let component: PratosThreeComponent;
  let fixture: ComponentFixture<PratosThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
