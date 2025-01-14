import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealItemPlaceholderComponent } from './deal-item-placeholder.component';

describe('DealItemPlaceholderComponent', () => {
  let component: DealItemPlaceholderComponent;
  let fixture: ComponentFixture<DealItemPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealItemPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealItemPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
