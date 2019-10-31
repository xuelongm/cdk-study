import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef, EventEmitter,
  Injector, OnDestroy,
  OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ComponentPortal, DomPortalHost, DomPortalOutlet, PortalInjector} from '@angular/cdk/portal';
import {PORTAL_CHILD_DATA, PortalChildComponentComponent} from '../portal-child-component/portal-child-component.component';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-portal-component',
  templateUrl: './portal-component.component.html',
  styleUrls: ['./portal-component.component.scss']
})
export class PortalComponentComponent implements OnInit, OnDestroy, AfterViewInit {

  private domPortalOutlet: DomPortalOutlet;

  private destroy$ = new Subject();

  @ViewChild('temp', {static: false}) divElementRef: ElementRef;

  constructor(private viewContainerRef: ViewContainerRef,
              private elementRef: ElementRef,
              private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef) {
    // console.log(viewContainerRef);
    // console.log(elementRef);
    // console.log(applicationRef);
  }

  ngOnInit() {


  }

  ngAfterViewInit() {
    this.domPortalOutlet = new DomPortalOutlet(
      this.divElementRef.nativeElement as HTMLElement,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector);

    const injectionTokens = new WeakMap();

    injectionTokens.set(PORTAL_CHILD_DATA, {data: '构建组件传递的参数'});

    // 2. 创建ComponentPortal
    const templatePortal = new ComponentPortal(
      PortalChildComponentComponent,
      this.viewContainerRef,
      new PortalInjector(this.injector, injectionTokens),
      this.componentFactoryResolver);

    // 3. ComponentPortal attach 到DomPortalHost里面去, 并且把ComponentPortal里面的时间返回上来
    // 如果不需要传出参数，this.portalHost.attach(templatePortal); 就可以了
    const portalComponentRef: ComponentRef<PortalChildComponentComponent>
      = this.domPortalOutlet.attachComponentPortal(templatePortal);

    // 处理返回回来的事件
    const eventEmitter: EventEmitter<string> = new EventEmitter<string>();
    portalComponentRef.instance.outEvent = eventEmitter;
    eventEmitter.pipe(takeUntil(this.destroy$))
      .subscribe((event: string) => this.handlerPortalEvent(event));
    // this.templateOutAngular();
  }

  private handlerPortalEvent(event: string): void {
    console.log('收到了Portal返回上来的事件信息:' + event);
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private templateOutAngular() {
    const htmlDivElement = document.createElement('div');
    const divDocument = document.body.appendChild(htmlDivElement);
    this.domPortalOutlet = new DomPortalOutlet(
      divDocument,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector);

    const injectionTokens = new WeakMap();

    injectionTokens.set(PORTAL_CHILD_DATA, {data: '构建组件传递的参数'});

    // 2. 创建ComponentPortal
    const templatePortal = new ComponentPortal(
      PortalChildComponentComponent,
      this.viewContainerRef,
      new PortalInjector(this.injector, injectionTokens),
      this.componentFactoryResolver);

    // 3. ComponentPortal attach 到DomPortalHost里面去, 并且把ComponentPortal里面的时间返回上来
    // 如果不需要传出参数，this.portalHost.attach(templatePortal); 就可以了
    const portalComponentRef: ComponentRef<PortalChildComponentComponent>
      = this.domPortalOutlet.attachComponentPortal(templatePortal);

    // 处理返回回来的事件
    const eventEmitter: EventEmitter<string> = new EventEmitter<string>();
    portalComponentRef.instance.outEvent = eventEmitter;
    eventEmitter.pipe(takeUntil(this.destroy$))
      .subscribe((event: string) => this.handlerPortalEvent(event));
  }

}
