import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaFiveComponent } from './japa-five.component';

describe('JapaFiveComponent', () => {
  let component: JapaFiveComponent;
  let fixture: ComponentFixture<JapaFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
