import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineStageComponent } from './pipeline-stage.component';

describe('PipelineStageComponent', () => {
  let component: PipelineStageComponent;
  let fixture: ComponentFixture<PipelineStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelineStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
