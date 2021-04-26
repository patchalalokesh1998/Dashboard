import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailynickelComponent } from './dailynickel.component';

describe('DailynickelComponent', () => {
  let component: DailynickelComponent;
  let fixture: ComponentFixture<DailynickelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailynickelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailynickelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
