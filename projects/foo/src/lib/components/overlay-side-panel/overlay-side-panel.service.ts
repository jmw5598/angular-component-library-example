import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable()
export class OverlaySidePanelService {
  private _isPanelVisible: boolean;
  private _closePanelSource: BehaviorSubject<boolean>;

  private _contentChangeSource: Subject<Type<any>>;

  constructor() {
    this._isPanelVisible = false;
    this._closePanelSource = new BehaviorSubject<boolean>(this._isPanelVisible);
    this._contentChangeSource = new Subject<any>();
  }

  public onPanelVibilityChange(): Observable<boolean> {
    return this._closePanelSource.asObservable();
  }

  public onContentChange(): Observable<Type<any>> {
    return this._contentChangeSource.asObservable();
  }

  public setContent(content: Type<any>): void {
    console.log("setting content");
    this._contentChangeSource.next(content);
  }

  public show(): void {
    console.log("showing panel");
    this._isPanelVisible = true;
    this._closePanelSource.next(this._isPanelVisible);
  }

  public close(): void {
    this._isPanelVisible = false;
    this._closePanelSource.next(this._isPanelVisible);
  }
}
