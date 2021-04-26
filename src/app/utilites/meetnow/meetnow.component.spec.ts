import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetnowComponent } from './meetnow.component';

describe('MeetnowComponent', () => {
  let component: MeetnowComponent;
  let fixture: ComponentFixture<MeetnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
