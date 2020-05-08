import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSidePanelComponent } from './messages-side-panel.component';

describe('MessagesSidePanelComponent', () => {
  let component: MessagesSidePanelComponent;
  let fixture: ComponentFixture<MessagesSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
