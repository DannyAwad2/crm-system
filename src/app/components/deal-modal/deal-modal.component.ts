import { Component, input } from '@angular/core';

@Component({
  selector: 'app-deal-modal',
  imports: [],
  templateUrl: './deal-modal.component.html',
  styleUrl: './deal-modal.component.scss',
})
export class DealModalComponent {
  show = input.required();
}
