// import { TopicEditComponent } from './home/topic-edit/topic-edit.component';
// import { TopicDetailsComponent } from './home/topic-details/topic-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: 'details', component: TopicDetailsComponent },
  // { path: 'edit', component: TopicEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
