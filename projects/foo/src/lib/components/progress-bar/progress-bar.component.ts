import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProgressBarFill } from './progress-bar-fill.enum';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'foo-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  @Input()
  public fill: ProgressBarFill;

  public progressValue$: Observable<number>;

  constructor(private _progressBarService: ProgressBarService) {
    this.fill = ProgressBarFill.PRIMARY;
  }

  ngOnInit(): void {
    this.progressValue$ = this._progressBarService.onProgressChange()
  }
}
