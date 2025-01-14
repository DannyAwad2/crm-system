import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  imports: [],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss',
})
export class TaskModalComponent {
  show = input.required<boolean>();
}
