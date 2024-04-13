import { Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MeetingComponent } from './pages/meeting/meeting.component';

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'meeting/:id',
    component: MeetingComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/schedule'
  }
];
