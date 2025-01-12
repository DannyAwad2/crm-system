import { Component, input } from '@angular/core';
import { IDeal } from '../../shared/ideal';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-deal-item',
  imports: [CurrencyPipe],
  templateUrl: './deal-item.component.html',
  styleUrl: './deal-item.component.scss',
})
export class DealItemComponent {
  deal = input.required<IDeal>();
}
