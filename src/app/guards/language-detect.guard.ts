import { ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateFn } from '@angular/router';

export const languageDetectGuard: CanActivateFn =(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const lang = route.params['lang'];
  return /^(en|fr|de)$/.test(lang);
};
