import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerThreeComponent } from './burguer-three.component';

describe('BurguerThreeComponent', () => {
  let component: BurguerThreeComponent;
  let fixture: ComponentFixture<BurguerThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
