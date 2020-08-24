import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./Components/topToolbarcomponents/about/about.component";
import { FormMainComponent } from "./Components/form-main/form-main.component";

const routes: Routes = [
  { path: "", component: FormMainComponent},
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [AboutComponent, FormMainComponent];
