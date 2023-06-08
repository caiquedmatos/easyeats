import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaContaComponent } from './deleta-conta.component';

describe('DeletaContaComponent', () => {
  let component: DeletaContaComponent;
  let fixture: ComponentFixture<DeletaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
