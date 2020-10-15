import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { CheckboxColor } from "./checkbox-color.enum";
import { CheckboxSize } from "./checkbox-size.enum";
import { CheckboxShape } from "./checkbox-shape.enum";
import { CheckboxLabelPosition } from "./checkbox-label-position.enum";

@Component({
  selector: "foo-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input()
  public label: string;

  @Input()
  public labelPosition: CheckboxLabelPosition;

  @Input()
  public shape: CheckboxShape;

  @Input()
  public size: CheckboxSize;

  @Input()
  public color: CheckboxColor;

  @Input()
  public disabled: boolean;

  @Input()
  public set value(isChecked: boolean) {
    if (!this.disabled) {
      this.isChecked = isChecked;
      this.onChange(isChecked);
    }
  }

  public isChecked: boolean = false;
  public onChange: any = () => {};
  public onTouch: any = () => {};

  constructor() {
    this.labelPosition = CheckboxLabelPosition.RIGHT;
    this.shape = CheckboxShape.ROUNDED;
    this.size = CheckboxSize.MEDIUM;
    this.color = CheckboxColor.PRIMARY;
    this.disabled = false;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public writeValue(checked: boolean): void {
    this.isChecked = checked;
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
    return `${this.labelPosition} ${this.shape} ${this.size} ${this.color}`;
  }
}
