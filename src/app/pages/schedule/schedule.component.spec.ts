import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { jest } from '@jest/globals';
import { Router } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { meetingsMock } from '../../../mock/meeting.mock';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            navigateByUrl: jest.fn()
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display schedule title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toBe('Schedule 2024');
  });

  it('should display meetings list', () => {
    const meetingsElements = fixture.debugElement.queryAll(By.css('app-meeting'));
    expect(meetingsElements.length).toEqual(meetingsMock.length);
  });

  it('should handle click event', () => {
    const clickSpy = jest.spyOn(component, 'goToMeeting');
    const meetingsElements = fixture.debugElement.queryAll(By.css('app-meeting'));
    meetingsElements[0].triggerEventHandler('clickTrack', meetingsMock[0].meeting_key);
    expect(clickSpy).toHaveBeenCalledWith(meetingsMock[0].meeting_key);
  });
});
