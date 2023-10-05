import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { NotFoundComponent } from './not-found/not-found.component';

// we declare all our routes within this array
const routes: Routes = [
  // good idea to have a default redirect for no specific URL
  {path:'', redirectTo:'info', pathMatch:'full'},
  {path:'details', component:DetailsComponent},
  // here we will route if there is a URL parameter called 'name'
  {path:'details/:name', component:DetailsComponent},
  {path:'details/:name/:age', component:DetailsComponent},
  {path:'about', component:AboutComponent},
  {path:'info', component:InfoComponent},
  // if no other path matches, then do this...
  // options: redirect somewhere, show a specific component (404) or throw error
  {path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
