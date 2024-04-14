import { Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MeetingPageComponent } from './pages/meeting/meeting-page.component';

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'meeting/:id',
    component: MeetingPageComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/schedule'
  }
];
