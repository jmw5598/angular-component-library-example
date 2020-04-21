import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  private _progressValue: number;
  private _progressSource: BehaviorSubject<number>;

  private _progressCompleteSource: Subject<boolean>;

  constructor() {
    this._progressValue = 0;
    this._progressSource = new BehaviorSubject<number>(this._progressValue);
    this._progressCompleteSource = new Subject<boolean>();
  }

  public updateProgress(value: number): void {
    this._progressValue = value;
    this._progressSource.next(this._progressValue);

    if (value >= 100) {
      setTimeout(() => {
        this._progressCompleteSource.next(true);
        this._progressValue = 0;
        this._progressSource.next(this._progressValue);
      }, 1000);
    }
  }

  public resetProgress(): void {
    this._progressValue = 0;
    this._progressSource.next(this._progressValue);
  }

  public onProgressChange(): Observable<number> {
    return this._progressSource.asObservable();
  }

  public onProgressComplete(): Observable<boolean> {
    return this._progressCompleteSource.asObservable();
  }
}
