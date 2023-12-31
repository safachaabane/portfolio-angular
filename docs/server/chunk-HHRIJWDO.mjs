import './polyfills.server.mjs';
import{H as nt,I as it,J as rt,K as st,N as at,R as ot,T as lt,U as q,a as u,b as C,c as K,d as U,e as H,f as Y,g as _,h as M,i as G,j as B,k as l,l as c,m as E,n as o,o as A,p,q as h,r as I,s as $,t as L,u as tt,v as et,w,x as b,y as k,z as D}from"./chunk-5LKGV263.mjs";import{a as O}from"./chunk-KRLCULJA.mjs";var P=(()=>{let r=class r{constructor(){this.loading=!1}showLoading(){this.loading=!0}hideLoading(){this.loading=!1}};r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();var ft=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=p({type:r,selectors:[["app-loading"]],decls:2,vars:0,template:function(i,s){i&1&&(w(0,"p"),D(1,"loading works!"),b())}});let n=r;return n})();function jt(n,r){n&1&&k(0,"app-loading")}function Mt(n,r){n&1&&k(0,"router-outlet")}var T=(()=>{let r=class r{constructor(e){this.loadingService=e,this.title="portfolio-angular",this.loading=!1}ngOnInit(){this.loading=this.loadingService.loading}};r.\u0275fac=function(i){return new(i||r)($(P))},r.\u0275cmp=p({type:r,selectors:[["app-root"]],decls:2,vars:1,template:function(i,s){i&1&&tt(0,jt,1,0,"app-loading")(1,Mt,1,0),i&2&&et(0,s.loading?0:1)},dependencies:[ot,ft]});let n=r;return n})();var ct=(n,r)=>{let t=n.params.lang;return/^(en|fr|de)$/.test(t)};var pt=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=p({type:r,selectors:[["app-home"]],decls:2,vars:0,template:function(i,s){i&1&&(w(0,"p"),D(1,"home works!"),b())}});let n=r;return n})();var d=class{},ht=(()=>{class n extends d{getTranslation(t){return u({})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(n)))(i||n)}})();static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),F=class{},dt=(()=>{class n{handle(t){return t.key}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();function y(n){return typeof n<"u"&&n!==null}function J(n){return n&&typeof n=="object"&&!Array.isArray(n)}function vt(n,r){let t=Object.assign({},n);return J(n)&&J(r)&&Object.keys(r).forEach(e=>{J(r[e])?e in n?t[e]=vt(n[e],r[e]):Object.assign(t,{[e]:r[e]}):Object.assign(t,{[e]:r[e]})}),t}var x=class{},gt=(()=>{class n extends x{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,e){let i;return typeof t=="string"?i=this.interpolateString(t,e):typeof t=="function"?i=this.interpolateFunction(t,e):i=t,i}getValue(t,e){let i=typeof e=="string"?e.split("."):[e];e="";do e+=i.shift(),y(t)&&y(t[e])&&(typeof t[e]=="object"||!i.length)?(t=t[e],e=""):i.length?e+=".":t=void 0;while(i.length);return t}interpolateFunction(t,e){return t(e)}interpolateString(t,e){return e?t.replace(this.templateMatcher,(i,s)=>{let a=this.getValue(e,s);return y(a)?a:i}):t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(n)))(i||n)}})();static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),S=class{},mt=(()=>{class n extends S{compile(t,e){return t}compileTranslations(t,e){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(n)))(i||n)}})();static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),N=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new L;onLangChange=new L;onDefaultLangChange=new L},X=new E("USE_STORE"),z=new E("USE_DEFAULT_LANG"),W=new E("DEFAULT_LANGUAGE"),Z=new E("USE_EXTEND"),R=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new L;_onLangChange=new L;_onDefaultLangChange=new L;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(t){this.isolate?this._currentLang=t:this.store.currentLang=t}get langs(){return this.isolate?this._langs:this.store.langs}set langs(t){this.isolate?this._langs=t:this.store.langs=t}get translations(){return this.isolate?this._translations:this.store.translations}set translations(t){this.isolate?this._translations=t:this.store.translations=t}constructor(t,e,i,s,a,g=!0,m=!1,v=!1,j){this.store=t,this.currentLoader=e,this.compiler=i,this.parser=s,this.missingTranslationHandler=a,this.useDefaultLang=g,this.isolate=m,this.extend=v,j&&this.setDefaultLang(j)}setDefaultLang(t){if(t===this.defaultLang)return;let e=this.retrieveTranslations(t);typeof e<"u"?(this.defaultLang==null&&(this.defaultLang=t),e.pipe(M(1)).subscribe(i=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(t===this.currentLang)return u(this.translations[t]);let e=this.retrieveTranslations(t);return typeof e<"u"?(this.currentLang||(this.currentLang=t),e.pipe(M(1)).subscribe(i=>{this.changeLang(t)}),e):(this.changeLang(t),u(this.translations[t]))}retrieveTranslations(t){let e;return(typeof this.translations[t]>"u"||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),e=this._translationRequests[t]),e}getTranslation(t){this.pending=!0;let e=this.currentLoader.getTranslation(t).pipe(G(1),M(1));return this.loadingTranslations=e.pipe(K(i=>this.compiler.compileTranslations(i,t)),G(1),M(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[t]=this.extend&&this.translations[t]?O(O({},i),this.translations[t]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),e}setTranslation(t,e,i=!1){e=this.compiler.compileTranslations(e,t),(i||this.extend)&&this.translations[t]?this.translations[t]=vt(this.translations[t],e):this.translations[t]=e,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){t.forEach(e=>{this.langs.indexOf(e)===-1&&this.langs.push(e)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(t,e,i){let s;if(e instanceof Array){let a={},g=!1;for(let m of e)a[m]=this.getParsedResult(t,m,i),C(a[m])&&(g=!0);if(g){let m=e.map(v=>C(a[v])?a[v]:u(a[v]));return Y(m).pipe(K(v=>{let j={};return v.forEach((Dt,Tt)=>{j[e[Tt]]=Dt}),j}))}return a}if(t&&(s=this.parser.interpolate(this.parser.getValue(t,e),i)),typeof s>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],e),i)),typeof s>"u"){let a={key:e,translateService:this};typeof i<"u"&&(a.interpolateParams=i),s=this.missingTranslationHandler.handle(a)}return typeof s<"u"?s:e}get(t,e){if(!y(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(_(i=>(i=this.getParsedResult(i,t,e),C(i)?i:u(i))));{let i=this.getParsedResult(this.translations[this.currentLang],t,e);return C(i)?i:u(i)}}getStreamOnTranslationChange(t,e){if(!y(t)||!t.length)throw new Error('Parameter "key" required');return U(H(()=>this.get(t,e)),this.onTranslationChange.pipe(B(i=>{let s=this.getParsedResult(i.translations,t,e);return typeof s.subscribe=="function"?s:u(s)})))}stream(t,e){if(!y(t)||!t.length)throw new Error('Parameter "key" required');return U(H(()=>this.get(t,e)),this.onLangChange.pipe(B(i=>{let s=this.getParsedResult(i.translations,t,e);return C(s)?s:u(s)})))}instant(t,e){if(!y(t)||!t.length)throw new Error('Parameter "key" required');let i=this.getParsedResult(this.translations[this.currentLang],t,e);if(C(i)){if(t instanceof Array){let s={};return t.forEach((a,g)=>{s[t[g]]=t[g]}),s}return t}else return i}set(t,e,i=this.currentLang){this.translations[i][t]=this.compiler.compile(e,i),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeLang(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t)}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.getTranslation(t)}resetLang(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;if(t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof t>"u"))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,t}static \u0275fac=function(e){return new(e||n)(o(N),o(d),o(S),o(x),o(F),o(z),o(X),o(Z),o(W))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();var Ct=(()=>{class n{static forRoot(t={}){return{ngModule:n,providers:[t.loader||{provide:d,useClass:ht},t.compiler||{provide:S,useClass:mt},t.parser||{provide:x,useClass:gt},t.missingTranslationHandler||{provide:F,useClass:dt},N,{provide:X,useValue:t.isolate},{provide:z,useValue:t.useDefaultLang},{provide:Z,useValue:t.extend},{provide:W,useValue:t.defaultLanguage},R]}}static forChild(t={}){return{ngModule:n,providers:[t.loader||{provide:d,useClass:ht},t.compiler||{provide:S,useClass:mt},t.parser||{provide:x,useClass:gt},t.missingTranslationHandler||{provide:F,useClass:dt},{provide:X,useValue:t.isolate},{provide:z,useValue:t.useDefaultLang},{provide:Z,useValue:t.extend},{provide:W,useValue:t.defaultLanguage},R]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=h({type:n});static \u0275inj=c({})}return n})();var Q=(()=>{let r=class r{constructor(e,i,s){this.translateService=e,this.router=i,this.loadingService=s}detect(e){return this.translateService.setDefaultLang(e),this.translateService.use(e),setTimeout(()=>{this.router.navigate([e]),this.loadingService.hideLoading()},1e3),!0}notDetect(){return this.translateService.setDefaultLang("en"),this.translateService.use("en"),setTimeout(()=>{this.router.navigate(["en"]),this.loadingService.hideLoading()},1e3),!0}show(){this.loadingService.showLoading()}};r.\u0275fac=function(i){return new(i||r)(o(R),o(lt),o(P))},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})(),Lt=(n,r)=>{if(A(Q).show(),typeof navigator<"u"){let e=(navigator.language||"en").split("-")[0];return A(Q).detect(e)}else return A(Q).notDetect()};var yt=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=p({type:r,selectors:[["app-error"]],decls:2,vars:0,template:function(i,s){i&1&&(w(0,"p"),D(1,"error works!"),b())}});let n=r;return n})();var Ft=[{path:"",children:[],canActivate:[Lt],component:T},{path:":lang",pathMatch:"full",canActivate:[ct],component:pt},{path:"**",component:yt}],wt=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=h({type:r}),r.\u0275inj=c({imports:[q.forRoot(Ft),q]});let n=r;return n})();var V=class{http;prefix;suffix;constructor(r,t="/assets/i18n/",e=".json"){this.http=r,this.prefix=t,this.suffix=e}getTranslation(r){return this.http.get(`${this.prefix}${r}${this.suffix}`)}};function At(n){return new V(n,"./assets/i18n/",".json")}var bt=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=h({type:r,bootstrap:[T]}),r.\u0275inj=c({providers:[st()],imports:[Ct.forRoot({loader:{provide:d,useFactory:At,deps:[nt]}}),rt,it,wt]});let n=r;return n})();var It=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=h({type:r,bootstrap:[T]}),r.\u0275inj=c({imports:[bt,at]});let n=r;return n})();export{It as a};
