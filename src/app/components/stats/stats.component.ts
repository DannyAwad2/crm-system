import { Component } from '@angular/core';
import { StatsItemComponent } from '../stats-item/stats-item.component';

@Component({
  selector: 'app-stats',
  imports: [StatsItemComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {}
