import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MeetingComponent } from './components/meeting/meeting.component';
import { meetingsMock } from '../../../mock/meeting.mock';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    MeetingComponent,
    NgFor
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  readonly meetingsMock = meetingsMock;

  goToMeeting(meetingId: number): void {
    console.log(meetingId);
  }
}
