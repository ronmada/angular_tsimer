import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopToolbarComponent } from './Components/top-toolbar/top-toolbar.component';
import { TopToolbarListDetailsComponent } from './Components/top-toolbar-list-details/top-toolbar-list-details.component';
import { FormMainComponent } from './Components/form-main/form-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceListComponent } from './Components/place-list/place-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    TopToolbarListDetailsComponent,
    FormMainComponent,
    PlaceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
