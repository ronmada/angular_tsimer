import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceByAreaComponent } from '../Components/place-by-area/place-by-area.component';

describe('PlaceByAreaComponent', () => {
  let component: PlaceByAreaComponent;
  let fixture: ComponentFixture<PlaceByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceByAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
