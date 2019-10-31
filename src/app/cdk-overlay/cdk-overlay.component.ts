import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {CdkPortal, ComponentPortal, TemplatePortalDirective} from '@angular/cdk/portal';
import {OverlayPanelComponent} from './panel/overlay-panel.component';

/**
 * overlay 全局service 用来创建浮动层，
 * OverlayPositionBuilder 位置策略
 * ScrollStrategyOptions 滚动策略 CloseScrollStrategy 关闭 BlockScrollStrategy 阻止滚动 RepositionScrollStrategy
 *
 * OverlayRef
 *    GlobalPositionStrategy
 *    FlexibleConnectedPositionStrategy
 *
 */


@Component({
  selector: 'app-cdk-overlay',
  templateUrl: './cdk-overlay.component.html',
  styleUrls: ['./cdk-overlay.component.scss']
})
export class CdkOverlayComponent implements OnInit {

  @ViewChild('overlayGlobalTemplate', {static: false}) templateGlobalPortals: CdkPortal;


  @ViewChild('connectComponentOrigin', {static: false}) overlayConnectComponentOrigin: ElementRef;

  @ViewChild('connectTemplateOrigin', {static: false}) overlayConnectTemplateOrigin: ElementRef;

  @ViewChild('overlayConnectTemplate', {static: false}) overlayOriginTemplateDirective: CdkPortal;

  @ViewChild('panel', {static: false}) panel: any;

  public actionMenuItemList = ['第一项item', '第二项item'];

  public isMenuOpen: boolean;

  private globalOverlayPosition = 0;

  private overlayTemplateRef: OverlayRef;

  private overlayConnectRef: OverlayRef;

  constructor(private overlay: Overlay,
              public viewContainerRef: ViewContainerRef) {
    this.isMenuOpen = false;
  }

  ngOnInit() {
  }

  // 全局居中
  public showOverlayGlobalPanelCenter() {
    console.log(this.panel)
    this.panel.init();
    // config OverlayConfig overlay 的全局配置 配置位置，滚动策略等
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .centerVertically() // 水平居中
      .centerHorizontally();
    console.log(config);
    config.hasBackdrop = true; // 是否有遮盖层
    const overlayRef = this.overlay.create(config); // OverlayRef, overlay层
    console.log(overlayRef);
    overlayRef.backdropClick().subscribe(res => {
      console.log(res);
      overlayRef.dispose();
    });
    overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
    // 监听overlayRef上的键盘按键事件
    overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
      console.log(overlayRef._keydownEventSubscriptions + ' times');
      console.log(event);
    });
  }

  public showOverlayGlobalPanelPosition() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay
      .position()
      .global()
      .left(`${this.globalOverlayPosition}px`)
      .top(`${this.globalOverlayPosition}px`);
    this.globalOverlayPosition += 30;
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
  }

  public showOverlayPanelTemplate() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .top(`${this.globalOverlayPosition}px`);
    this.globalOverlayPosition += 30;
    this.overlayTemplateRef = this.overlay.create(config);
    this.overlayTemplateRef.attach(this.templateGlobalPortals);
  }

  public dismissOverlayPanelTemplate() {
    if (this.overlayTemplateRef && this.overlayTemplateRef.hasAttached()) {
      this.overlayTemplateRef.dispose();
    }
  }

  /**
   * overlay connect origin 显示，依附某个组件显示
   */
  showOverlayPanelConnectComponent() {
    const strategy = this.overlay.position()
      .flexibleConnectedTo(this.overlayConnectComponentOrigin.nativeElement)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetX: 0,
        offsetY: 0
      }]);
    // strategy.withLockedPosition(true);
    const config = new OverlayConfig({positionStrategy: strategy});
    config.scrollStrategy = this.overlay.scrollStrategies.reposition();
    // config.hasBackdrop = true;
    this.overlayConnectRef = this.overlay.create(config);
    this.overlayConnectRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
  }

  dismissOverlayPanelConnectComponent() {
    if (this.overlayConnectRef && this.overlayConnectRef.hasAttached()) {
      this.overlayConnectRef.dispose();
    }
  }

  /**
   * overlay connect origin 显示，依附ng-template
   */
  showOverlayPanelConnectTemplate() {
    const strategy = this.overlay.position()
      .flexibleConnectedTo(this.overlayConnectTemplateOrigin.nativeElement)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
        offsetX: 0,
        offsetY: 0
      }]);
    const config = new OverlayConfig({positionStrategy: strategy});
    config.hasBackdrop = true;
    config.backdropClass = 'backdrop-with-out';
    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    overlayRef.attach(this.overlayOriginTemplateDirective);
  }

}
