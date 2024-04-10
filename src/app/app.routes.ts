import { Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/schedule'
  }
];
