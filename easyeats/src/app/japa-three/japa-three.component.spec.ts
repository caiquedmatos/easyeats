import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaThreeComponent } from './japa-three.component';

describe('JapaThreeComponent', () => {
  let component: JapaThreeComponent;
  let fixture: ComponentFixture<JapaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
