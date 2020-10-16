import { Directive, HostListener } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil, distinctUntilChanged, debounceTime, tap } from "rxjs/operators";
import { AbstractDebounceDirective } from "./abstract-debounce.directive";

@Directive({
  selector: "[fooDebounceClick]"
})
export class DebounceClickDirective extends AbstractDebounceDirective {
  constructor() {
    super();
  }

  @HostListener("click", ["$event"])
  public onKeyUp(event: any): void {
    event.preventDefault();
    this.emitEvent$.next(event);
  }
}
