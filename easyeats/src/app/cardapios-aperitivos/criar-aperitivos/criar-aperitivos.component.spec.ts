import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAperitivosComponent } from './criar-aperitivos.component';

describe('CriarAperitivosComponent', () => {
  let component: CriarAperitivosComponent;
  let fixture: ComponentFixture<CriarAperitivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAperitivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAperitivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
