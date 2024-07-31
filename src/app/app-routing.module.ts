import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path:"", redirectTo:"home", pathMatch:'full'
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"login", component:LogInComponent
  },
  {
    path:"categories", component:CategoriesComponent
  },
  {
    path:"cart", component:CartComponent,
  },
  {
    path:"about", component:AboutComponent,
  },
  {
    path:"registration", component:RegistrationComponent,
  },
  {
    path:"**", component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
