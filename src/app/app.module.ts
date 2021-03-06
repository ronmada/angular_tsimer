import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopToolbarComponent } from './Components/top-toolbar/top-toolbar.component';
import { FormMainComponent } from './Components/form-main/form-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceListInfoComponent } from './Components/place-list-info/place-list-info.component';
import { AboutComponent } from './Components/topToolbarcomponents/about/about.component';
import { PlaceByAreaComponent } from './Components/place-by-area/place-by-area.component';
import { OpinionsComponent } from './Components/topToolbarcomponents/opinions/opinions.component';
import { NotFound404PageComponent } from './Components/not-found404-page/not-found404-page.component';
import { InterceptorService } from './Services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlaceDetailsComponent } from './Components/place-details/place-details.component';
import { MatButtonModule } from '@angular/material/button';
import { PlaceFeaturesComponent } from './Components/place-features/place-features.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations: [
        AppComponent,
        TopToolbarComponent,
        FormMainComponent,
        PlaceListInfoComponent,
        AboutComponent,
        PlaceByAreaComponent,
        OpinionsComponent,
        NotFound404PageComponent,
        PlaceDetailsComponent,
        PlaceFeaturesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
