import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from "../dynamic/dynamic.component";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  @Input() title = 'Sample Title'
  @ViewChild('viewRef', { static: true, read: ViewContainerRef })
  private viewContainerRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void { }

  click() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
  }
}
