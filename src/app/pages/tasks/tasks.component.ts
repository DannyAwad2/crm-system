import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../components/top-header/top-header.component';
import { TaskModalComponent } from '../../components/task-modal/task-modal.component';

@Component({
  selector: 'app-tasks',
  imports: [TopHeaderComponent, TaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {}
