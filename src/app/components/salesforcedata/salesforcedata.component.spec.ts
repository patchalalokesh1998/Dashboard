import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforcedataComponent } from './salesforcedata.component';

describe('SalesforcedataComponent', () => {
  let component: SalesforcedataComponent;
  let fixture: ComponentFixture<SalesforcedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesforcedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforcedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
