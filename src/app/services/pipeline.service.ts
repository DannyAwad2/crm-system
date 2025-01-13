import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { EventEmitter, Injectable } from '@angular/core';
import { IDeal } from '../shared/ideal';

@Injectable({
  providedIn: 'root',
})
export class PipelineService {
  onDrop = new EventEmitter<CdkDragDrop<IDeal[]>>();

  constructor() {}
}
