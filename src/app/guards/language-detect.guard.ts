import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root', 
})

class translateServiceDetect {
  constructor(private translateService: TranslateService,  private router: Router,private loadingService :LoadingService){}
  detect(languageCode:string):boolean {
    this.loadingService.showLoading();
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
    setTimeout(() => {
      this.router.navigate([languageCode]);
      this.loadingService.hideLoading();
    }, 1000);
   
    return true;
  }
  notDetect(): boolean{
    this.loadingService.showLoading();
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
      
    setTimeout(() => {
      this.router.navigate(["en"]);
      this.loadingService.hideLoading();
    }, 1000);
    return true;
  }
}
export const languageDetectGuard: CanActivateFn =(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if (typeof navigator !== 'undefined') {
    const userLang = navigator.language || 'en';
    const languageCode = userLang.split('-')[0];
    return inject(translateServiceDetect).detect(languageCode); 
  } else {
    return inject(translateServiceDetect).notDetect();

  }
};
