import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MeetingPageComponent } from './meeting-page.component';

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
});
