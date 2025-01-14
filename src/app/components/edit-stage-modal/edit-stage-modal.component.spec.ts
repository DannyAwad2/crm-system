import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStageModalComponent } from './edit-stage-modal.component';

describe('EditStageModalComponent', () => {
  let component: EditStageModalComponent;
  let fixture: ComponentFixture<EditStageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStageModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
