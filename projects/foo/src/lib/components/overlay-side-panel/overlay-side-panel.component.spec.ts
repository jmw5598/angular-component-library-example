import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySidePanelComponent } from './overlay-side-panel.component';

describe('OverlaySidePanelComponent', () => {
  let component: OverlaySidePanelComponent;
  let fixture: ComponentFixture<OverlaySidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlaySidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
