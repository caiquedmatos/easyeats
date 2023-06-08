import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaTwoComponent } from './japa-two.component';

describe('JapaTwoComponent', () => {
  let component: JapaTwoComponent;
  let fixture: ComponentFixture<JapaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
