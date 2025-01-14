import { Component, EventEmitter, input, Output } from '@angular/core';
import { IDeal } from '../../shared/ideal';
import { DealItemComponent } from '../deal-item/deal-item.component';
import { CurrencyPipe } from '@angular/common';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { DealItemPlaceholderComponent } from '../deal-item-placeholder/deal-item-placeholder.component';

@Component({
  selector: 'app-pipeline-stage',
  imports: [
    DealItemComponent,
    CurrencyPipe,
    CdkDrag,
    CdkDropList,
    DealItemPlaceholderComponent,
  ],
  templateUrl: './pipeline-stage.component.html',
  styleUrl: './pipeline-stage.component.scss',
})
export class PipelineStageComponent {
  @Output() onChange = new EventEmitter<CdkDragDrop<IDeal[]>>();
  title = input.required<string>();
  deals = input.required<IDeal[]>();
  connectedDropLists = input.required<string[]>();
  id = input.required<string>();

  getTotalDealsValue() {
    return this.deals().reduce((acc, curr) => acc + curr.product.price, 0);
  }

  drop(event: CdkDragDrop<IDeal[]>) {
    this.onChange.emit(event);
  }
}
