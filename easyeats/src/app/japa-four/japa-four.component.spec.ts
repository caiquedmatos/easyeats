import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaFourComponent } from './japa-four.component';

describe('JapaFourComponent', () => {
  let component: JapaFourComponent;
  let fixture: ComponentFixture<JapaFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
