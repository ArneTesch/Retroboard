import { Routes } from '@angular/router';
import { OverviewComponent } from './modules/retroboard/containers/overview/overview.component';
import { TopicsOverviewComponent } from './modules/retroboard/containers/topics-overview/topics-overview.component';
import { BoardsOverviewComponent } from './modules/retroboard/containers/boards-overview/boards-overview.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'retro/boards-overview',
  },
  {
    path: 'retro',
    component: OverviewComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'boards-overview',
      },
      {
        path: 'boards-overview', pathMatch: 'full', component: BoardsOverviewComponent,
      },
      {
        path: 'topics-overview/:id', pathMatch: 'full', component: TopicsOverviewComponent,
      },
    ],
  },
  {
    path: '**', redirectTo: 'retro/boards-overview'
  }
];
