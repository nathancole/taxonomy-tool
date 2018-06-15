import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaxonomyTreeComponent } from './taxonomy-tree/taxonomy-tree.component';
import { TopicBrowserComponent } from './topic-browser/topic-browser.component';
import { TopicFilterPipe } from './topic-filter.pipe';
import { SortByPipe } from './sort-by.pipe';
import { TopicTagsPipe } from './topic-tags.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TaxonomyTreeComponent,
    TopicBrowserComponent,
    TopicFilterPipe,
    SortByPipe,
    TopicTagsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
