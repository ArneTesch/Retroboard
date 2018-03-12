import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../../environments/environment';
// containers
import { OverviewComponent } from './containers/overview/overview.component';
import { TopicsOverviewComponent } from './containers/topics-overview/topics-overview.component';
import { BoardsOverviewComponent } from './containers/boards-overview/boards-overview.component';
// components
import { TopbarComponent } from './components/topbar/topbar.component';
import { RetroItemComponent } from './components/retro-item/retro-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RetroService } from './services/retro.service';
import { RetroSandbox } from './sandboxes/retro.sandbox';
import { CreateRetroFormComponent } from './components/create-retro-topic-form/create-retro-form.component';
import { CreateRetroboardFormComponent } from './components/create-retro-board-form/create-retroboard-form.component';
import { BoardItemComponent } from './components/board-item/board-item.component';

// Pipes
import { CaptalizePipe } from '../shared/pipes/captalize.pipe';

// Providers
import { LeftNavService } from './services/left-nav.service';
import { TopbarService } from './services/topbar.service';

// Directives
import { SidebarDirective } from './directives/sidebar.directive';
import { TopbarDirective } from './directives/topbar.directive';

const angularModules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

const externalModules = [
  DragulaModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireDatabaseModule,
];

const containers = [
  OverviewComponent,
  TopicsOverviewComponent,
  BoardsOverviewComponent,
];

const components = [
  TopbarComponent,
  SidebarComponent,
  RetroItemComponent,
  BoardItemComponent,
  CreateRetroFormComponent,
  CreateRetroboardFormComponent,
];

const providers = [
  RetroService,
  RetroSandbox,
  LeftNavService,
  TopbarService
];

const pipes = [
  CaptalizePipe,
];

const directives = [
  SidebarDirective,
  TopbarDirective,
];

@NgModule({
  imports: [
    ...angularModules,
    ...externalModules,
  ],
  declarations: [
    ...containers,
    ...components,
    ...pipes,
    ...directives,
  ],
  providers: [
    ...providers,
  ],
  exports: [
    ...pipes,
    ...directives,
  ],
})
export class RetroboardModule {
}
