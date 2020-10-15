import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckboxColor, CheckboxLabelPosition, CheckboxShape, CheckboxSize } from 'foo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  public CheckboxColor = CheckboxColor;
  public CheckboxLabelPosition = CheckboxLabelPosition;
  public CheckboxShape = CheckboxShape;
  public CheckboxSize = CheckboxSize;

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      rememberMe: [false]
    });
  }

  ngAfterViewInit(): void {
  }
}
