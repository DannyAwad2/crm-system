import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stage-modal',
  imports: [],
  templateUrl: './stage-modal.component.html',
  styleUrl: './stage-modal.component.scss',
})
export class StageModalComponent {
  show = input.required<boolean>();
}
