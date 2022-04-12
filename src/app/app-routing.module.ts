import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from "./components/main-container/main-container.component";
import {AuthGuard} from "./utility/app.guard";

const routes: Routes = [
  { path: '', component: MainContainerComponent},
  // { path: '', component: MainContainerComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
