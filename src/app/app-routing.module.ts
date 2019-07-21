import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterByEmailComponent } from './register-by-email/register-by-email.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registerByEmail', component: RegisterByEmailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
