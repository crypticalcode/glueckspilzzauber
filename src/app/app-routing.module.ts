import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';

const routes: Routes = [{ path: 'podcast', component: PodcastComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
