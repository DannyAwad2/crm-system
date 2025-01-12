import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopHeaderComponent } from '../../components/top-header/top-header.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent,
    TopHeaderComponent,
    StatsComponent,
    RecentActivityComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
