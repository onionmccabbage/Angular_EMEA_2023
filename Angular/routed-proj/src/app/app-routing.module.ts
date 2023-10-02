import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path:'', // re-direct the default to our home page
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home', // this represents exactly what will be on the end of the base root url
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent   
  },
  {
    path:'person',
    component:PersonComponent
  },
  {
    path:'person/:name', // the colon indicates 'name' will be a URL parameter
    component:PersonComponent
  },
  {
    path:'person/:name/:age',
    component:PersonComponent
  },
  {
    // we will only permit authenticated users (authGuard)
    path:'details',
    component:DetailsComponent,
  },
  {
    // careful - make sure the other routes work before implementing this
    path:'**', // this will catch any path not already resolved
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
