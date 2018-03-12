import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from './modules/shared/shared.module';
import { RetroboardModule } from './modules/retroboard/retroboard.module';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavService } from './modules/retroboard/services/left-nav.service';
import { TopbarService } from './modules/retroboard/services/topbar.service';

const components = [
  AppComponent,
];
const angularModules = [
  BrowserModule,
  RouterModule.forRoot(routes),
  HttpClientModule,
];
const modules = [
  SharedModule.forRoot(),
  RetroboardModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...angularModules,
    ...modules,
  ],
  providers: [],
  bootstrap: [
    ...components,
  ]
})
export class AppModule {
  constructor(router: Router, leftNavService: LeftNavService, topbarService: TopbarService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        leftNavService.clearContents();
        topbarService.clearContents();
      }
    });

  }
}
