import { Component } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RaceLineComponent } from './components/race-line/race-line.component';
import { MeetingDetail } from '../../../interfaces';
import { positionsMock, driversMock, intervalsMock } from '../../../mock';
import { driverMap, meetingsMap } from '../../../constants';
import { meetingsMock } from '../../../mock';

@Component({
  selector: 'app-meeting-page',
  standalone: true,
  imports: [
    RaceLineComponent,
    NgFor,
    DatePipe
  ],
  templateUrl: './meeting-page.component.html',
  styleUrl: './meeting-page.component.scss'
})
export class MeetingPageComponent {

  meetingDetailList: MeetingDetail[] = positionsMock.map(detail => {
    const driverName = driversMock
      .filter(driver => driver.driver_number === detail.driver_number)[0].name_acronym;
    const { interval } = intervalsMock
      .filter(interval => interval.driver_number === detail.driver_number)[0];
    const { car, teamColor } = driverMap[driverName];

    return {
      driver_name: driverName,
      car,
      car_color: teamColor,
      interval: interval?.toString() || null,
      progress: 70
    }
  });

  trackPreview: SafeUrl = '';
  trackName: string = '';
  trackLocation: string = '';
  raceDate: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private domSanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      const { 
        meeting_official_name,
        date_start
       } = meetingsMock
        .filter(meeting => meeting.circuit_key === +id)[0];
      this.trackPreview = this.domSanitizer.bypassSecurityTrustUrl(meetingsMap[id].track);
      this.trackName = meeting_official_name
      this.trackLocation = meetingsMap[id].flag;
      this.raceDate = date_start;
    })
  }
}
