import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicBrowserComponent } from './topic-browser/topic-browser.component';

const routes: Routes = [
  { path: 'browse', component: TopicBrowserComponent },
  { path: 'browse/:group', component: TopicBrowserComponent },  
  { path: 'browse/:group/:category', component: TopicBrowserComponent },  
  { path: 'browse/:group/:category/:filterText', component: TopicBrowserComponent },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
