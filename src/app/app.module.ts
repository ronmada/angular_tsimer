import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopToolbarComponent } from './Components/top-toolbar/top-toolbar.component';
import { TopToolbarListDetailsComponent } from './Components/top-toolbar-list-details/top-toolbar-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    TopToolbarListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
