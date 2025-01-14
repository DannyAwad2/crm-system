import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageModalComponent } from './stage-modal.component';

describe('StageModalComponent', () => {
  let component: StageModalComponent;
  let fixture: ComponentFixture<StageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
