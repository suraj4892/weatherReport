import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercountrylistComponent } from './weathercountrylist.component';

describe('WeathercountrylistComponent', () => {
  let component: WeathercountrylistComponent;
  let fixture: ComponentFixture<WeathercountrylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathercountrylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercountrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
