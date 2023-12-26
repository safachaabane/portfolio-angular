import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http:HttpClient){
 return new TranslateHttpLoader(http,"./assets/i18n/",".json");
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
             provide:TranslateLoader,
             useFactory:HttpLoaderFactory,
             deps:[HttpClient],
      }
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
