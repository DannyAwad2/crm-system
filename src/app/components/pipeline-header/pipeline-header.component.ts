import { Component, input } from '@angular/core';
import { IDeal } from '../../shared/ideal';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipeline-header',
  imports: [CurrencyPipe],
  templateUrl: './pipeline-header.component.html',
  styleUrl: './pipeline-header.component.scss',
})
export class PipelineHeaderComponent {
  deals = input.required<IDeal[]>();
  getTotalDealsValue() {
    return this.deals().reduce((acc, curr) => acc + curr.product.price, 0);
  }
}
