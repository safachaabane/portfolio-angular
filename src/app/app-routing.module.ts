import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { languageGuard } from './guards/language.guard';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', children: [], component: AppComponent },
 
  {
    path: ':lang',
    pathMatch: 'full',
    canActivate: [languageGuard],
    component:HomeComponent  
  },
  { path: ':lang/projects',
  canActivate: [languageGuard],
  component: ProjectsComponent},
  { path: '404', component: ErrorComponent },
  {
    path: '**',
   redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
