import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../components/top-header/top-header.component';

@Component({
  selector: 'app-tasks',
  imports: [TopHeaderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {}
