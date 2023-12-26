import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-angular';
  constructor(private translateService:TranslateService )
  {
    const userLang=navigator.language || 'en';
    const languageCode=userLang.split('-')[0];
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }
}
