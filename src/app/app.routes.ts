import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products-services',
    loadComponent: () =>
      import('./pages/products-services/products-services.component').then(
        (m) => m.ProductsServicesComponent
      ),
  },
  {
    path: 'pipeline',
    loadComponent: () =>
      import('./pages/pipeline/pipeline.component').then(
        (m) => m.PipelineComponent
      ),
  },
  {
    path: 'client-profile',
    loadComponent: () =>
      import('./pages/client-profile/client-profile.component').then(
        (m) => m.ClientProfileComponent
      ),
  },
  {
    path: 'team-member-profile',
    loadComponent: () =>
      import('./pages/team-member-profile/team-member-profile.component').then(
        (m) => m.TeamMemberProfileComponent
      ),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.component').then(
        (m) => m.ReportsComponent
      ),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks/tasks.component').then((m) => m.TasksComponent),
  },
  {
    path: 'teams2',
    loadComponent: () =>
      import('./pages/teams2/teams2.component').then((m) => m.Teams2Component),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./pages/teams/teams.component').then((m) => m.TeamsComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./components/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
];
