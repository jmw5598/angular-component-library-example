import { TestBed } from '@angular/core/testing';

import { OverlaySidePanelService } from './overlay-side-panel.service';

describe('OverlaySidePanelService', () => {
  let service: OverlaySidePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlaySidePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
