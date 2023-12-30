import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const languageValidator = (param: string) => /(en|fr|de)/.test(param);

const routes: Routes = [
  { path: ':lang', children: [] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
