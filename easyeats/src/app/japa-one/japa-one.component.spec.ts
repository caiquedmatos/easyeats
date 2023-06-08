import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaOneComponent } from './japa-one.component';

describe('JapaOneComponent', () => {
  let component: JapaOneComponent;
  let fixture: ComponentFixture<JapaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
