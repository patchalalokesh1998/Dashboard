import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedmeetingComponent } from './requestedmeeting.component';

describe('RequestedmeetingComponent', () => {
  let component: RequestedmeetingComponent;
  let fixture: ComponentFixture<RequestedmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedmeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
