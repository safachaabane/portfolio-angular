import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TranslateDetectService {
  constructor(
    private translateService: TranslateService,
    private router: Router,
  ) {}
  detect(languageCode: string) {
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
      this.router.navigate([languageCode]);
   
  }
  notDetect() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
      this.router.navigate(['en']);
  }
}
