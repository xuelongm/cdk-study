import {
  AfterViewInit,
  ApplicationRef,
  Component, ComponentFactoryResolver,
  ElementRef,
  Inject,
  Injector,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren, ViewContainerRef
} from '@angular/core';
import {
  CdkPortal,
  ComponentPortal,
  DomPortalOutlet,
  Portal,
  PortalInjector,
  TemplatePortal,
  TemplatePortalDirective
} from '@angular/cdk/portal';
import {DOCUMENT} from '@angular/common';
import {PORTAL_CHILD_DATA, PortalChildComponentComponent} from './portal-child-component/portal-child-component.component';

/**
 * portal 研究
 * Portal ComponentPortal TemplatePortal 包装成可挂在的dom
 * BasePortalOutlet BasePortalHost DomPortalHost DomPortalOutlet 包装成可被挂载的dom
 */

@Component({
  selector: 'app-ckd-portal',
  templateUrl: './ckd-portal.component.html',
  styleUrls: ['./ckd-portal.component.scss']
})
export class CkdPortalComponent implements OnInit, AfterViewInit {

  // 获取到对应html里面所有添加了cdkPortal指令的元素的TemplatePortal
  @ViewChildren(CdkPortal) templatePortals: QueryList<TemplatePortal<any>>;
  // 获取单个的cdkPortal指令的元素的TemplatePortal 【#templatePortal="cdkPortal"】
  @ViewChild('templatePortal', {static: false}) divTemplatePortal: TemplatePortal<any>;

  @ViewChild('outOfApp', {static: false}) templateOutOfApp: TemplateRef<any>;
  private domPortalOutletOutOfApp: DomPortalOutlet;

  public ctx = {
    $implicit: {
      name: 'John',
      age: 34
    },
    location: 'USA'
  };


  protected selectedPortal: Portal<any>;


  constructor(@Inject(DOCUMENT) private document: any,
              private elementRef: ElementRef,
              private injector: Injector,
              private appRef: ApplicationRef,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  onPortalAttached() {
    console.log('cdkPortalOutlet上有组件attach上来了');
  }

  ngAfterViewInit(): void {
    /**
     * 把内容放置在 <app-root标签之外>
     */
    const element = this.document.createElement('div');
    this.document.body.appendChild(element);
    this.domPortalOutletOutOfApp = new DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
    const templatePortal = new TemplatePortal(
      this.templateOutOfApp,
      this.viewContainerRef
    );
    this.domPortalOutletOutOfApp.attach(templatePortal);
    console.log(this.divTemplatePortal);
  }

  cdkPortalFirst() {
    this.templatePortals.first.context = this.ctx;
    this.selectedPortal = this.templatePortals.first;
  }

  cdkPortalLast() {
    this.selectedPortal = this.templatePortals.last;
  }

  cdkPortalComponent() {
    const injectionTokens = new WeakMap();

    injectionTokens.set(PORTAL_CHILD_DATA, {data: '构建组件传递的参数'});
    this.selectedPortal = new ComponentPortal(
      PortalChildComponentComponent,
      null,
      new PortalInjector(this.injector, injectionTokens)
    );
  }

}
