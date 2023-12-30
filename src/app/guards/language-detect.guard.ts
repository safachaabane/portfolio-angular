import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root', 
})

class translateServiceDetect {
  constructor(private translateService: TranslateService,  private router: Router){}
  detect(languageCode:string):boolean {
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
    this.router.navigate([languageCode]);
    //  this.translateService.get("name").subscribe({
    //   next: (res)=>{ console.log(res);
    //   },
    // })    
    return true;
  }
  notDetect(): boolean{
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.router.navigate(["en"]);    
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
