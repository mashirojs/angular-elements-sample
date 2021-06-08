import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { createCustomElement } from "@angular/elements";
import { SampleComponent } from "./sample/sample.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const custom = createCustomElement(SampleComponent, { injector });
    customElements.define('app-sample', custom);
  }
  ngDoBootstrap(): void { }
}
