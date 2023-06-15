import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { RevertPipe } from './revert.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [AppComponent, ShortenPipe, FilterPipe, RevertPipe, SortPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
