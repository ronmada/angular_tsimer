import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopToolbarListDetailsComponent } from '../Components/top-toolbar-list-details/top-toolbar-list-details.component';

describe('TopToolbarListDetailsComponent', () => {
  let component: TopToolbarListDetailsComponent;
  let fixture: ComponentFixture<TopToolbarListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopToolbarListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopToolbarListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
