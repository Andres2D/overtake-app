import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Meeting } from '../../../../../interfaces/meeting.interface';
import { meetingsMock } from '../../../../../mock';
import { meetingsMap } from '../../../../../constants/meeting.constants';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.scss'
})
export class MeetingComponent {
  @Input() meeting: Meeting = meetingsMock[0];
  @Output() clickTrack: EventEmitter<number> = new EventEmitter();

  constructor(private domSanitizer: DomSanitizer) {}

  getTrackById(id: number): SafeUrl | null {
    return meetingsMap[id] 
      ? this.domSanitizer.bypassSecurityTrustUrl(meetingsMap[id].track)
      : null;
  }

  getFlagById(id: number): string | null {
    return meetingsMap[id] 
      ? meetingsMap[id].flag
      : null;
  }

  onClickTrack(): void {
    this.clickTrack.emit(this.meeting.circuit_key);
  }
}
