import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnInit, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DomPortalOutlet, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal-template',
  templateUrl: './portal-template.component.html',
  styleUrls: ['./portal-template.component.scss']
})
export class PortalTemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('portalTemplate', {static: false}) testTemplate: TemplateRef<any>;

  constructor(private elementRef: ElementRef,
              private injector: Injector,
              private applicationRef: ApplicationRef,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // 1. DomPortalHost
    const portalHost = new DomPortalOutlet(
      this.elementRef.nativeElement as HTMLElement,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    // 2. TemplatePortal
    const templatePortal = new TemplatePortal(
      this.testTemplate,
      this.viewContainerRef,
      {
        $implicit: '我是传递进来的数据',
      }
    );
    // 3. attach
    portalHost.attach(templatePortal);
  }

}
