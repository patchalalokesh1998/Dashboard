import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandcardComponent } from './brandcard.component';

describe('BrandcardComponent', () => {
  let component: BrandcardComponent;
  let fixture: ComponentFixture<BrandcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
