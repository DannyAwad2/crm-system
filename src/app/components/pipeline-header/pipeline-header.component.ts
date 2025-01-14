import { Component, EventEmitter, input, Output } from '@angular/core';
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
  @Output() onSave = new EventEmitter<boolean>();
  isDealsUpdated = input.required<boolean>();

  getTotalDealsValue() {
    return this.deals().reduce((acc, curr) => acc + curr.product.price, 0);
  }
  handleSave() {
    this.onSave.emit(true);
  }
}
