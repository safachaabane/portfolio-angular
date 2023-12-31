import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LastProjectsComponent } from './components/last-projects/last-projects.component';
import { ServicesComponent } from './components/services/services.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';

import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './pages/loading/loading.component';
import { ErrorComponent } from './pages/error/error.component';

export function HttpLoaderFactory(http:HttpClient){
 return new TranslateHttpLoader(http,"./assets/i18n/",".json");
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    SkillsComponent,
    LastProjectsComponent,
    ServicesComponent,
    NavBarComponent,
    SliderComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient],
      }
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
