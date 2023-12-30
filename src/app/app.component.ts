import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';
  constructor(private translateService: TranslateService,
    private router: Router) {
    // if (typeof navigator !== 'undefined') {
    //   const userLang = navigator.language || 'en';
    //   const languageCode = userLang.split('-')[0];
    //   this.translateService.setDefaultLang(languageCode);
    //   this.translateService.use(languageCode);
    //   this.router.navigate([languageCode]);
    //   // this.translateService.get("name").subscribe({
    //   //   next: (res)=>{ console.log(res);
    //   //   },
    //   // })
    // } else {
    //   this.translateService.setDefaultLang('en');
    //   this.translateService.use('en');
    //   this.router.navigate(["en"]);
    //   // this.translateService.getTranslation("en").subscribe({
    //   //   next: (res)=>{ console.log(res);
    //   //   },
    //   // })
    // }
  }
}