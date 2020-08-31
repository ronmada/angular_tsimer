import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404PageComponent } from '../Components/not-found404-page/not-found404-page.component';

describe('NotFound404PageComponent', () => {
  let component: NotFound404PageComponent;
  let fixture: ComponentFixture<NotFound404PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFound404PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFound404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
