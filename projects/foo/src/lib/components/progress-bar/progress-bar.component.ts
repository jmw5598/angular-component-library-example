import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProgressBarFill } from './progress-bar-fill.enum';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'foo-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  @Input()
  public fill: ProgressBarFill;

  public progressValue: number;
  private _progressValueSubject: Subject<void>;

  constructor(private _progressBarService: ProgressBarService) {
    this.fill = ProgressBarFill.PRIMARY;
    this.progressValue = 0;
    this._progressValueSubject = new Subject<void>();
  }

  ngOnInit(): void {
    this._progressBarService
      .onProgressChange()
      .pipe(takeUntil(this._progressValueSubject))
      .subscribe(progressValue => this.progressValue = progressValue);
  }

  ngOnDestroy(): void {
    this._progressValueSubject.next();
    this._progressValueSubject.complete();
  }
}
