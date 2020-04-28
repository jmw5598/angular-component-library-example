import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCardComponent } from './back-card.component';

describe('BackCardComponent', () => {
  let component: BackCardComponent;
  let fixture: ComponentFixture<BackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
