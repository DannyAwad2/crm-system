import { Component, input } from '@angular/core';

@Component({
  selector: 'app-edit-stage-modal',
  imports: [],
  templateUrl: './edit-stage-modal.component.html',
  styleUrl: './edit-stage-modal.component.scss',
})
export class EditStageModalComponent {
  show = input.required<boolean>();
}
