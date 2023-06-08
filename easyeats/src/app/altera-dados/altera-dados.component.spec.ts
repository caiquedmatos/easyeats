import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraDadosComponent } from './altera-dados.component';

describe('AlteraDadosComponent', () => {
  let component: AlteraDadosComponent;
  let fixture: ComponentFixture<AlteraDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteraDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteraDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
