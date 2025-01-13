import { Component, EventEmitter, input, Output } from '@angular/core';
import { IDeal } from '../../shared/ideal';
import { DealItemComponent } from '../deal-item/deal-item.component';
import { CurrencyPipe } from '@angular/common';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pipeline-stage',
  imports: [DealItemComponent, CurrencyPipe, CdkDrag, CdkDropList],
  templateUrl: './pipeline-stage.component.html',
  styleUrl: './pipeline-stage.component.scss',
})
export class PipelineStageComponent {
  @Output() onChange = new EventEmitter<CdkDragDrop<IDeal[]>>();
  title = input.required<string>();
  deals = input.required<IDeal[]>();

  getTotalDealsValue() {
    return this.deals().reduce((acc, curr) => acc + curr.product.price, 0);
  }

  drop(event: CdkDragDrop<IDeal[]>) {
    this.onChange.emit(event);
  }
}
