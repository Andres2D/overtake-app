import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MeetingDetail } from '../../../../../interfaces';
import { detailMock } from '../../../../../mock';
import { driverMap } from '../../../../../constants';

@Component({
  selector: 'app-race-line',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './race-line.component.html',
  styleUrl: './race-line.component.scss'
})
export class RaceLineComponent {
  @Input() detail: MeetingDetail = detailMock;

  get intervalPosition() {
    const space = this.detail.progress < 50 ? '10%' : '70%';
    return space;
  }

  get progressPercentage() {
    return `${this.detail.progress < 29 ? 0 : this.detail.progress - 29}%`;
  }

  get intervalColor() {
    return this.detail.progress > 49 
      ? driverMap[this.detail.driver_name].intervalColor 
      : 'black';
  }

  get raceLineBackgroundColor() {
    return this.detail.car_color;
  }
}
