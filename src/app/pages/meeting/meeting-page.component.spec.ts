import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MeetingPageComponent } from './meeting-page.component';
import { meetingsMock } from '../../../mock/meeting.mock';
import { meetingsMap } from '../../../constants/meeting.constants';

describe('MeetingComponent', () => {
  let component: MeetingPageComponent;
  let fixture: ComponentFixture<MeetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MeetingPageComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 10
            })
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display circuit information', () => {
    const mockMeeting = meetingsMock.filter(meeting => meeting.circuit_key === 10)[0];
    
    const trackElement = fixture.debugElement.query(By.css('.track'));
    const nameELement = fixture.debugElement.query(By.css('.trackName'));
    const progressElement = fixture.debugElement.query(By.css('.progress'));
    const dateElement = fixture.debugElement.query(By.css('.date'));

    const dateFormat = new Date(mockMeeting.date_start)
    .toLocaleString('en-us',{month:'short', day:'numeric'});

    expect(trackElement.nativeElement.alt).toBe(mockMeeting.meeting_official_name);
    expect(nameELement.nativeElement.textContent).toContain(mockMeeting.meeting_official_name);
    expect(nameELement.nativeElement.textContent).toContain(meetingsMap[10].flag);
    expect(progressElement.nativeElement.textContent.trim()).toBe('100%');
    expect(dateElement.nativeElement.textContent).toBe(dateFormat);
  });
});
