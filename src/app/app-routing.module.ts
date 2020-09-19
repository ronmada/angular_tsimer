import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/topToolbarcomponents/about/about.component';
import { FormMainComponent } from './Components/form-main/form-main.component';
import { OpinionsComponent } from './Components/topToolbarcomponents/opinions/opinions.component';
import { NotFound404PageComponent } from './Components/not-found404-page/not-found404-page.component';

const routes: Routes = [
    { path: '', component: FormMainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'opinions', component: OpinionsComponent },
    { path: 'angular_tsimer', redirectTo: '/' },
    { path: '**', component: NotFound404PageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
    AboutComponent,
    FormMainComponent,
    OpinionsComponent,
    NotFound404PageComponent,
];
