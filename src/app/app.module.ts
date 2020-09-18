import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopToolbarComponent } from './Components/top-toolbar/top-toolbar.component';
import { FormMainComponent } from './Components/form-main/form-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceListComponent } from './Components/place-list/place-list.component';
import { AboutComponent } from './Components/topToolbarcomponents/about/about.component';
import { PlaceByAreaComponent } from './Components/place-by-area/place-by-area.component';
import { OpinionsComponent } from './Components/topToolbarcomponents/opinions/opinions.component';
import { NotFound404PageComponent } from './Components/not-found404-page/not-found404-page.component';
import { InterceptorService } from './Services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations: [
        AppComponent,
        TopToolbarComponent,
        FormMainComponent,
        PlaceListComponent,
        AboutComponent,
        PlaceByAreaComponent,
        OpinionsComponent,
        NotFound404PageComponent,
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
