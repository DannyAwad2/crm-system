import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealItemComponent } from './deal-item.component';

describe('DealItemComponent', () => {
  let component: DealItemComponent;
  let fixture: ComponentFixture<DealItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
