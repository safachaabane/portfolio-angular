import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const languageGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const lang = route.params['lang'];
  return /^(en|fr|de)$/.test(lang);
};
