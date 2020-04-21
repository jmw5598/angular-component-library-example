import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AlertType, ProgressBarFill, ProgressBarService } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ProgressBarFill = ProgressBarFill;

  public alertType: AlertType;
  public alertIsVisible: boolean;
  public alertMessage: string;
  public alertIconClass: string;
  public alertIsDismissible: boolean

  constructor(private _progressBarService: ProgressBarService) {
    this.alertType = AlertType.INFO;
    this.alertIsDismissible = false;
    this.alertMessage = 'Progress complete';
    this.alertIconClass = 'fas fa-info-circle';
    this.alertIsDismissible = false;
  }
  ngOnInit() {
    this._progressBarService.updateProgress(0);
    setTimeout(() => this._progressBarService.updateProgress(25), 1000);
    setTimeout(() => this._progressBarService.updateProgress(50), 2000);
    setTimeout(() => this._progressBarService.updateProgress(100), 3000);

    this._progressBarService.onProgressComplete()
      .pipe(take(1))
      .subscribe(complete => {
        if (complete) {
          this.alertIsVisible = true;
          setTimeout(() => this.alertIsVisible = false, 2000);
        }
      });
  }
}
