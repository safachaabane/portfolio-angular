import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { languageGuard } from './guards/language.guard';
import { HomeComponent } from './pages/home/home.component';
import { languageDetectGuard } from './guards/language-detect.guard';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', children: [], canActivate:[languageDetectGuard], component: AppComponent },
  {
    path: ':lang',
    pathMatch: 'full',
    canActivate: [languageGuard],
    component: HomeComponent,
  },
  {
    path: '**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
