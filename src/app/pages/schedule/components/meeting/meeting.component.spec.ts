import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { jest } from '@jest/globals';

import { MeetingComponent } from './meeting.component';
import { meetingsMock } from '../../../../../mock/meeting.mock';
import { meetingsMap } from '../../../../../constants/meeting.constants';

describe('MeetingComponent', () => {
  let component: MeetingComponent;
  let fixture: ComponentFixture<MeetingComponent>;
  const meetingMock = meetingsMock[2];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display meeting information', () => {
    component.meeting = meetingMock;
    fixture.detectChanges();
    const containerElement = fixture.debugElement.query(By.css('.meeting'));
    const imageElement = fixture.debugElement.query(By.css('.track'));
    const flagElement = fixture.debugElement.query(By.css('.flag'));
    const titleElement = fixture.debugElement.query(By.css('.title'));
    const subtitleElement = fixture.debugElement.query(By.css('.subtitle'));
    const dateFormatted = new Date(meetingMock.date_start)
      .toLocaleString('en-us',{month:'short', day:'numeric'});

    expect(containerElement.nativeElement.title)
      .toBe(meetingMock.meeting_official_name);
    expect(imageElement.nativeElement.alt.trim())
      .toBe(meetingMock.circuit_short_name.trim().toUpperCase());
    expect(flagElement.nativeElement.textContent)
      .toBe(meetingsMap[meetingMock.circuit_key].flag);
    expect(titleElement.nativeElement.textContent.trim())
      .toBe(meetingMock.circuit_short_name.trim().toUpperCase());
    expect(subtitleElement.nativeElement.textContent.trim())
      .toBe(dateFormatted.toUpperCase());
  });

  it('should emit meeting click', () => {
    component.meeting = meetingMock;
    const emitSpy = jest.spyOn(component.clickTrack, 'emit');
    const containerElement = fixture.debugElement.query(By.css('.meeting'));
    containerElement.triggerEventHandler('click', {});
    expect(emitSpy).toHaveBeenCalledWith(meetingMock.circuit_key);
  });

  it('should display default information on wrong input', () => {
    component.meeting = {
      ...meetingMock,
      circuit_key: -1
    };
    fixture.detectChanges();
    const imageElement = fixture.debugElement.query(By.css('.track'));
    const flagElement = fixture.debugElement.query(By.css('.flag'));
    expect(imageElement.nativeElement.alt.trim())
      .toBe(meetingMock.circuit_short_name.trim().toUpperCase());
    expect(flagElement.nativeElement.textContent).toBe('');
  });
});
