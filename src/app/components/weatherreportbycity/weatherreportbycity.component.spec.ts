import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherreportbycityComponent } from './weatherreportbycity.component';

describe('WeatherreportbycityComponent', () => {
  let component: WeatherreportbycityComponent;
  let fixture: ComponentFixture<WeatherreportbycityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherreportbycityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherreportbycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
