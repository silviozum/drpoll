import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPollComponent } from './content-poll/content-poll.component';
import { Main } from './main/main.component';

const routes: Routes = [
  { path: '', component: Main },
  { path: 'poll/:id', component: ContentPollComponent },
  { path: 'poll/:id/result', component: ContentPollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
