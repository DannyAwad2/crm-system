import { Component, input } from '@angular/core';
import { IDeal } from '../../shared/ideal';
import { DealItemComponent } from '../deal-item/deal-item.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipeline-stage',
  imports: [DealItemComponent, CurrencyPipe],
  templateUrl: './pipeline-stage.component.html',
  styleUrl: './pipeline-stage.component.scss',
})
export class PipelineStageComponent {
  title = input.required<string>();
  deals = input.required<IDeal[]>();
  getTotalDealsValue() {
    return this.deals().reduce((acc, curr) => acc + curr.product.price, 0);
  }
}
