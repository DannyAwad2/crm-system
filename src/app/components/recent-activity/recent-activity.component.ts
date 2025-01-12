import { Component } from '@angular/core';
import { ActivityItemComponent } from '../activity-item/activity-item.component';

@Component({
  selector: 'app-recent-activity',
  imports: [ActivityItemComponent],
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.scss',
})
export class RecentActivityComponent {}
