import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAperitivosComponent } from './listar-aperitivos.component';

describe('ListarAperitivosComponent', () => {
  let component: ListarAperitivosComponent;
  let fixture: ComponentFixture<ListarAperitivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAperitivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAperitivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
