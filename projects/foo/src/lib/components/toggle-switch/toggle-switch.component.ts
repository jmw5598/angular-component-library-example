import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ToggleSwitchColor } from './toggle-switch-color.enum';
import { ToggleSwitchShape } from './toggle-switch-shape.enum';
import { ToggleSwitchSize } from './toggle-switch-size.enum';

@Component({
  selector: 'foo-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  @Input()
  public color: ToggleSwitchColor;

  @Input()
  public shape: ToggleSwitchShape;

  @Input()
  public size: ToggleSwitchSize;

  @Input()
  public disabled: boolean;

  @Input()
  public set value(isChecked: boolean) {
    if (!this.disabled){
      this.isChecked = isChecked
      this.onChange(isChecked)
    }
  }
  
  public isChecked: boolean;

  constructor() {
    this.disabled = false;
    this.color = ToggleSwitchColor.PRIMARY;
    this.shape = ToggleSwitchShape.PILLED;
    this.size = ToggleSwitchSize.MEDIUM;
  }

  public onChange: any = () => {}
  public onTouch: any = () => {}

  public writeValue(value: any): void {
    this.value = value
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public toggleChecked(): void {
    if (!this.disabled) {
      this.isChecked = !this.isChecked;
      this.onChange(this.isChecked);
    }
  }

  public get classes(): string {
    return this.color + ' ' + this.size + ' ' + this.shape;
  }
}