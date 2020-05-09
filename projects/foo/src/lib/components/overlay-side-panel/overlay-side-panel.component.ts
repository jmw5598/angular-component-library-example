import { 
  Component, OnInit, OnDestroy, Input, Type, ComponentFactoryResolver, 
  ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { OverlaySidePanelService } from './overlay-side-panel.service';
import { OverlaySidePanelStyle } from './overlay-side-panel-style.enum';
import { FADE_IN_OUT } from '../_shared/animations/fade-in-out.animation';

@Component({
  selector: 'foo-overlay-side-panel',
  templateUrl: './overlay-side-panel.component.html',
  styleUrls: ['./overlay-side-panel.component.scss'],
  animations: [FADE_IN_OUT]
})
export class OverlaySidePanelComponent implements OnInit, OnDestroy {
  @ViewChild('content', { read: ViewContainerRef }) 
  public panelContentRef: ViewContainerRef;

  @Input()
  public overlayStyle: OverlaySidePanelStyle

  public isPanelVisible: boolean;

  private _sidePanelServiceSubject$: Subject<void>;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver, 
    private _overlaySidePanelService: OverlaySidePanelService
  ) { 
    this._sidePanelServiceSubject$ = new Subject<void>();
    this.overlayStyle = OverlaySidePanelStyle.DIM_DARK;
  }

  ngOnInit(): void {
    this._overlaySidePanelService.onPanelVibilityChange()
      .pipe(takeUntil(this._sidePanelServiceSubject$))
      .subscribe((visible: boolean) => this.isPanelVisible = visible);

    this._overlaySidePanelService.onContentChange()
      .pipe(takeUntil(this._sidePanelServiceSubject$))
      .subscribe((component: Type<any>) => this._setPanelContent(component));
  }

  public close(): void {
    this._overlaySidePanelService.close();
  }

  private _setPanelContent(component: Type<any>) {
    const componentFactory: ComponentFactory<any> = this._componentFactoryResolver.resolveComponentFactory(component);
    this.panelContentRef.clear();
    this.panelContentRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    this._sidePanelServiceSubject$.next();
    this._sidePanelServiceSubject$.complete();
  }
}
