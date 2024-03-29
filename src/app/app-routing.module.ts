import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { languageGuard } from './guards/language.guard';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppComponent,
        pathMatch:'full'
      },
      {
        path: ':lang',
        pathMatch: 'full',
        canActivate: [languageGuard],
        component: HomeComponent,
      },
      {
        path: ':lang/projects',
        children: [
          { path: '', component: ProjectsComponent },
          { path: ':urlProject', component: ProjectComponent },
        ],
      },
      {
        path: ':lang/blogs',
        children: [{ path: ':urlBlog', component: BlogComponent }],
      },
    ],
  },

  { path: '404', component: ErrorComponent },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
