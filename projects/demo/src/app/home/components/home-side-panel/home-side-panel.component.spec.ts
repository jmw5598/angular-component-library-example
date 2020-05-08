import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSidePanelComponent } from './home-side-panel.component';

describe('HomeSidePanelComponent', () => {
  let component: HomeSidePanelComponent;
  let fixture: ComponentFixture<HomeSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
