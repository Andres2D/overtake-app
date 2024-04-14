import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceLineComponent } from './race-line.component';

describe('RaceLineComponent', () => {
  let component: RaceLineComponent;
  let fixture: ComponentFixture<RaceLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaceLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
