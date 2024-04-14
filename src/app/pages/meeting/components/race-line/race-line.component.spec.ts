import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { detailMock } from '../../../../../mock';

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
    component.detail = detailMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display driver information', () => {
    const driverNameElement = fixture.debugElement.query(By.css('.driver'));
    const intervalElement = fixture.debugElement.query(By.css('.interval'));
    expect(driverNameElement.nativeElement.textContent).toBe(detailMock.driver_name);
    expect(intervalElement.nativeElement.textContent.trim()).toBe(detailMock.interval);
  });

  it('should configure dynamic properties', () => {
    const progressElement = fixture.debugElement.query(By.css('.progress'));
    const intervalElement = fixture.debugElement.query(By.css('.interval'));
    const progressStyles = progressElement.styles['_values'] as any;
    const intervalStyles = intervalElement.styles['_values'] as any;
    expect(progressStyles).not.toBeNull();
    expect(intervalStyles).not.toBeNull();
    expect(progressStyles['width']).toBe(`${detailMock.progress - 29}%`);
    expect(progressStyles['background']).toBe('rgb(239, 26, 45)');
    expect(intervalStyles['right']).toBe('70%');
    expect(intervalStyles['color']).toBe('white');
  });

  it('should show lower interval', () => {
    component.detail = {
      ...detailMock,
      progress: 20
    };
    fixture.detectChanges();
    const intervalElement = fixture.debugElement.query(By.css('.interval'));
    const intervalStyles = intervalElement.styles['_values'] as any;
    expect(intervalStyles['right']).toBe('10%');
  })
});
