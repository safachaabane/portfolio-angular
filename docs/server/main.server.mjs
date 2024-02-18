import './polyfills.server.mjs';
import{$ as U3,A as F,B as _3,C as b1,D as O3,Da as e4,E as H,F as B3,Fa as f2,G as W,Ga as n1,H as D3,Ha as X2,I as D,J as S,K as k,L as t,M as o,N as z,O as E3,P as i1,Q as _,R as q3,S as R3,T as N,U as I3,V as j3,W as v,X as g,Y as w,Z as o2,_ as $2,a as s1,aa as y1,b as v1,ba as A1,c as R2,ca as C,d as I2,da as d,e as j2,ea as G3,f as A3,fa as W3,g as P3,ga as Z3,h as U1,i as U2,j as G2,k as $,l as a1,m as G1,n as G,na as P1,o as L,oa as Y3,p as e1,pa as z1,q as W2,qa as $3,r as s2,ra as l2,s as t2,sa as X3,t as W1,ta as K3,u as T3,ua as Q3,v as P,va as J3,w as Z2,wa as c4,x as Y2,y as F3,z as l,za as a4}from"./chunk-II3TXGGS.mjs";import{a as q2,f as y3}from"./chunk-VN5XZYCL.mjs";var h1=class{},i4=(()=>{class c extends h1{getTranslation(e){return s1({})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=W1(c)))(n||c)}})();static \u0275prov=$({token:c,factory:c.\u0275fac})}return c})(),Z1=class{},n4=(()=>{class c{handle(e){return e.key}static \u0275fac=function(i){return new(i||c)};static \u0275prov=$({token:c,factory:c.\u0275fac})}return c})();function m2(c,a){if(c===a)return!0;if(c===null||a===null)return!1;if(c!==c&&a!==a)return!0;let e=typeof c,i=typeof a,n,r,s;if(e==i&&e=="object")if(Array.isArray(c)){if(!Array.isArray(a))return!1;if((n=c.length)==a.length){for(r=0;r<n;r++)if(!m2(c[r],a[r]))return!1;return!0}}else{if(Array.isArray(a))return!1;s=Object.create(null);for(r in c){if(!m2(c[r],a[r]))return!1;s[r]=!0}for(r in a)if(!(r in s)&&typeof a[r]<"u")return!1;return!0}return!1}function p1(c){return typeof c<"u"&&c!==null}function K2(c){return c&&typeof c=="object"&&!Array.isArray(c)}function t4(c,a){let e=Object.assign({},c);return K2(c)&&K2(a)&&Object.keys(a).forEach(i=>{K2(a[i])?i in c?e[i]=t4(c[i],a[i]):Object.assign(e,{[i]:a[i]}):Object.assign(e,{[i]:a[i]})}),e}var T1=class{},r4=(()=>{class c extends T1{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,i){let n;return typeof e=="string"?n=this.interpolateString(e,i):typeof e=="function"?n=this.interpolateFunction(e,i):n=e,n}getValue(e,i){let n=typeof i=="string"?i.split("."):[i];i="";do i+=n.shift(),p1(e)&&p1(e[i])&&(typeof e[i]=="object"||!n.length)?(e=e[i],i=""):n.length?i+=".":e=void 0;while(n.length);return e}interpolateFunction(e,i){return e(i)}interpolateString(e,i){return i?e.replace(this.templateMatcher,(n,r)=>{let s=this.getValue(i,r);return p1(s)?s:n}):e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=W1(c)))(n||c)}})();static \u0275prov=$({token:c,factory:c.\u0275fac})}return c})(),F1=class{},s4=(()=>{class c extends F1{compile(e,i){return e}compileTranslations(e,i){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=W1(c)))(n||c)}})();static \u0275prov=$({token:c,factory:c.\u0275fac})}return c})(),v2=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new b1;onLangChange=new b1;onDefaultLangChange=new b1},Q2=new G1("USE_STORE"),J2=new G1("USE_DEFAULT_LANG"),c3=new G1("DEFAULT_LANGUAGE"),a3=new G1("USE_EXTEND"),Y1=(()=>{class c{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new b1;_onLangChange=new b1;_onDefaultLangChange=new b1;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,i,n,r,s,f=!0,m=!1,h=!1,p){this.store=e,this.currentLoader=i,this.compiler=n,this.parser=r,this.missingTranslationHandler=s,this.useDefaultLang=f,this.isolate=m,this.extend=h,p&&this.setDefaultLang(p)}setDefaultLang(e){if(e===this.defaultLang)return;let i=this.retrieveTranslations(e);typeof i<"u"?(this.defaultLang==null&&(this.defaultLang=e),i.pipe(U1(1)).subscribe(n=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return s1(this.translations[e]);let i=this.retrieveTranslations(e);return typeof i<"u"?(this.currentLang||(this.currentLang=e),i.pipe(U1(1)).subscribe(n=>{this.changeLang(e)}),i):(this.changeLang(e),s1(this.translations[e]))}retrieveTranslations(e){let i;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),i=this._translationRequests[e]),i}getTranslation(e){this.pending=!0;let i=this.currentLoader.getTranslation(e).pipe(U2(1),U1(1));return this.loadingTranslations=i.pipe(R2(n=>this.compiler.compileTranslations(n,e)),U2(1),U1(1)),this.loadingTranslations.subscribe({next:n=>{this.translations[e]=this.extend&&this.translations[e]?q2(q2({},n),this.translations[e]):n,this.updateLangs(),this.pending=!1},error:n=>{this.pending=!1}}),i}setTranslation(e,i,n=!1){i=this.compiler.compileTranslations(i,e),(n||this.extend)&&this.translations[e]?this.translations[e]=t4(this.translations[e],i):this.translations[e]=i,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(i=>{this.langs.indexOf(i)===-1&&this.langs.push(i)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,i,n){let r;if(i instanceof Array){let s={},f=!1;for(let m of i)s[m]=this.getParsedResult(e,m,n),v1(s[m])&&(f=!0);if(f){let m=i.map(h=>v1(s[h])?s[h]:s1(s[h]));return A3(m).pipe(R2(h=>{let p={};return h.forEach((u,x)=>{p[i[x]]=u}),p}))}return s}if(e&&(r=this.parser.interpolate(this.parser.getValue(e,i),n)),typeof r>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],i),n)),typeof r>"u"){let s={key:i,translateService:this};typeof n<"u"&&(s.interpolateParams=n),r=this.missingTranslationHandler.handle(s)}return typeof r<"u"?r:i}get(e,i){if(!p1(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(P3(n=>(n=this.getParsedResult(n,e,i),v1(n)?n:s1(n))));{let n=this.getParsedResult(this.translations[this.currentLang],e,i);return v1(n)?n:s1(n)}}getStreamOnTranslationChange(e,i){if(!p1(e)||!e.length)throw new Error('Parameter "key" required');return I2(j2(()=>this.get(e,i)),this.onTranslationChange.pipe(G2(n=>{let r=this.getParsedResult(n.translations,e,i);return typeof r.subscribe=="function"?r:s1(r)})))}stream(e,i){if(!p1(e)||!e.length)throw new Error('Parameter "key" required');return I2(j2(()=>this.get(e,i)),this.onLangChange.pipe(G2(n=>{let r=this.getParsedResult(n.translations,e,i);return v1(r)?r:s1(r)})))}instant(e,i){if(!p1(e)||!e.length)throw new Error('Parameter "key" required');let n=this.getParsedResult(this.translations[this.currentLang],e,i);if(v1(n)){if(e instanceof Array){let r={};return e.forEach((s,f)=>{r[e[f]]=e[f]}),r}return e}else return n}set(e,i,n=this.currentLang){this.translations[n][e]=this.compiler.compile(i,n),this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(i){return new(i||c)(G(v2),G(h1),G(F1),G(T1),G(Z1),G(J2),G(Q2),G(a3),G(c3))};static \u0275prov=$({token:c,factory:c.\u0275fac})}return c})();var O=(()=>{class c{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,i){this.translate=e,this._ref=i}updateValue(e,i,n){let r=s=>{this.value=s!==void 0?s:e,this.lastKey=e,this._ref.markForCheck()};if(n){let s=this.translate.getParsedResult(n,e,i);v1(s.subscribe)?s.subscribe(r):r(s)}this.translate.get(e,i).subscribe(r)}transform(e,...i){if(!e||!e.length)return e;if(m2(e,this.lastKey)&&m2(i,this.lastParams))return this.value;let n;if(p1(i[0])&&i.length)if(typeof i[0]=="string"&&i[0].length){let r=i[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{n=JSON.parse(r)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${i[0]}`)}}else typeof i[0]=="object"&&!Array.isArray(i[0])&&(n=i[0]);return this.lastKey=e,this.lastParams=i,this.updateValue(e,n),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,n,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(i){return new(i||c)(F(Y1,16),F(_3,16))};static \u0275pipe=s2({name:"translate",type:c,pure:!1});static \u0275prov=$({token:c,factory:c.\u0275fac})}return c})(),o4=(()=>{class c{static forRoot(e={}){return{ngModule:c,providers:[e.loader||{provide:h1,useClass:i4},e.compiler||{provide:F1,useClass:s4},e.parser||{provide:T1,useClass:r4},e.missingTranslationHandler||{provide:Z1,useClass:n4},v2,{provide:Q2,useValue:e.isolate},{provide:J2,useValue:e.useDefaultLang},{provide:a3,useValue:e.extend},{provide:c3,useValue:e.defaultLanguage},Y1]}}static forChild(e={}){return{ngModule:c,providers:[e.loader||{provide:h1,useClass:i4},e.compiler||{provide:F1,useClass:s4},e.parser||{provide:T1,useClass:r4},e.missingTranslationHandler||{provide:Z1,useClass:n4},{provide:Q2,useValue:e.isolate},{provide:J2,useValue:e.useDefaultLang},{provide:a3,useValue:e.extend},{provide:c3,useValue:e.defaultLanguage},Y1]}}static \u0275fac=function(i){return new(i||c)};static \u0275mod=e1({type:c});static \u0275inj=a1({})}return c})();var z2=(()=>{let a=class a{constructor(i,n){this.translateService=i,this.router=n}detect(i){this.translateService.setDefaultLang(i),this.translateService.use(i),this.router.navigate([i])}notDetect(){this.translateService.setDefaultLang("en"),this.translateService.use("en"),this.router.navigate(["en"])}};a.\u0275fac=function(n){return new(n||a)(G(Y1),G(f2))},a.\u0275prov=$({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var f4=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-loading"]],decls:13,vars:0,consts:[[1,"loading","position-relative","vh-100"],[1,"loader"],[1,"track"],[1,"mouse"],[1,"face"],[1,"ears-container"],[1,"eyes-container"],[1,"eye"],[1,"phiz"],[1,"nose"],[1,"lip"],[1,"mouth"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),z(3,"div",3),o(),t(4,"div",4),z(5,"div",5),t(6,"div",6),z(7,"div",7)(8,"div",7),o(),t(9,"div",8),z(10,"div",9)(11,"div",10)(12,"div",11),o()()()())},styles:['@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-moz-keyframes rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-o-keyframes rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-webkit-keyframes _ngcontent-%COMP%_hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@-moz-keyframes hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@-o-keyframes hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@keyframes _ngcontent-%COMP%_hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@-webkit-keyframes _ngcontent-%COMP%_blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-moz-keyframes blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-o-keyframes blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@keyframes _ngcontent-%COMP%_blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}.loading[_ngcontent-%COMP%]{margin:0;background:#ffffff;overflow:hidden}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:260px;height:260px;margin-left:-130px;margin-top:-130px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{width:100%;height:100%;border:solid #f1c73a;border-width:5px 5px 3px 0;border-top-color:transparent;border-radius:50%;margin-left:-3px;margin-top:-3px;-webkit-animation:_ngcontent-%COMP%_rotate 3s infinite linear;-moz-animation:rotate 3s infinite linear;-o-animation:rotate 3s infinite linear;animation:_ngcontent-%COMP%_rotate 3s infinite linear}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]{position:absolute;right:31px;top:18px;width:25px;height:25px;background:#f1c73a;border-radius:80% 0 55% 50%/55% 0 80% 50%;transform:rotate(-95deg)}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:after{position:absolute;content:"";width:9px;height:9px;border-radius:50%;background:inherit}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:before{left:5px;top:-4px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:after{left:20px;top:11px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:130px;height:130px;margin-left:-65px;margin-top:-65px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:after{position:absolute;content:"";width:50%;height:100%}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:before{background:#FBDA69;border-top-left-radius:65px;border-bottom-left-radius:55px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:after{left:50%;background:#fde9a5;border-top-right-radius:65px;border-bottom-right-radius:55px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]{position:absolute;top:-8px;width:130px;height:50px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:after{position:absolute;content:"";width:0;height:0;border-top:35px solid transparent;border-bottom:35px solid transparent}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:before{border-left:35px solid #FBDA69}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:after{right:0;border-right:35px solid #fde9a5}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]{position:absolute;overflow:hidden;left:50%;top:30px;width:106px;height:50px;margin-left:-53px;z-index:1;-webkit-animation:_ngcontent-%COMP%_hideEye 3s infinite linear;-moz-animation:hideEye 3s infinite linear;-o-animation:hideEye 3s infinite linear;animation:_ngcontent-%COMP%_hideEye 3s infinite linear}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]{position:relative;bottom:0;float:left;width:50px;height:50px;border-radius:50%;color:#fbda69;background:#ffffff;-webkit-animation:_ngcontent-%COMP%_blink 3s infinite linear;-moz-animation:blink 3s infinite linear;-o-animation:blink 3s infinite linear;animation:_ngcontent-%COMP%_blink 3s infinite linear}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after{position:absolute;content:"";top:4px;right:14px;width:12px;height:12px;border-radius:inherit;background:#c9ae54}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:last-child{float:right;color:#fde9a5}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]{position:absolute;left:50%;top:66px;width:32px;height:48px;margin-left:-16px;z-index:1}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%]{width:100%;height:15px;border-radius:5px 5px 25px 25px;background:#c9ae54}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .lip[_ngcontent-%COMP%]{position:relative;left:50%;width:4px;height:12px;margin-left:-2px;background:#c9ae54}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .lip[_ngcontent-%COMP%]:before{position:absolute;content:"";width:100%;height:5px;background:#c3a541}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .mouth[_ngcontent-%COMP%]{position:relative;left:50%;width:20px;height:6px;margin-left:-13px;background:#c9ae54;border:3px solid #c9ae54;border-bottom-right-radius:12px;border-bottom-left-radius:12px}']});let c=a;return c})();function I6(c,a){c&1&&z(0,"app-loading")}function j6(c,a){c&1&&z(0,"router-outlet")}var O1=(()=>{let a=class a{constructor(i){this.translateDetectService=i,this.title="safa chaabane",this.loading=!0}ngOnInit(){let i=typeof localStorage<"u"?localStorage.getItem("lang"):null;if(i)setTimeout(()=>{this.translateDetectService.detect(i),this.loading=!1},1e3);else if(typeof navigator<"u"){let r=(navigator.language||"en").split("-")[0];["en","fr","de"].includes(r)?setTimeout(()=>{this.translateDetectService.detect(r),this.loading=!1,localStorage.setItem("lang",r)},1e3):setTimeout(()=>{this.translateDetectService.notDetect(),localStorage.setItem("lang","en"),this.loading=!1},1e3)}}};a.\u0275fac=function(n){return new(n||a)(F(z2))},a.\u0275cmp=L({type:a,selectors:[["app-root"]],decls:2,vars:1,template:function(n,r){n&1&&W(0,I6,1,0,"app-loading")(1,j6,1,0),n&2&&D3(0,r.loading?0:1)},dependencies:[e4,f4]});let c=a;return c})();var m4=(c,a)=>{let e=c.params.lang;return/^(en|fr|de)$/.test(e)};var U6=(c,a)=>a.id;function G6(c,a){if(c&1&&(t(0,"li",9)(1,"a",10),v(2),o()()),c&2){let e=a.$implicit;l(1),H("routerLink",".")("fragment",e.link),l(1),g(e.item)}}function W6(c,a){c&1&&z(0,"span")}var v4=(()=>{let a=class a{constructor(i,n){this.translateDetectService=i,this.router=n,this.url=""}ngOnInit(){this.url=localStorage.getItem("lang")||""}onChange(i){return y3(this,null,function*(){localStorage.clear(),localStorage.setItem("lang",i),this.translateDetectService.detect(i)})}};a.\u0275fac=function(n){return new(n||a)(F(z2),F(f2))},a.\u0275cmp=L({type:a,selectors:[["app-nav-bar"]],decls:15,vars:3,consts:[[1,"sticky-top","nav-bar","d-flex","justify-content-around","align-items-center","p-2"],["routerLink","/",1,"nav-bar-logo"],["src","../../../assets/log-safa-chaabane.png","alt","logo safa chaabane",1,"h-100","w-100"],[1,"d-lg-flex","m-0","d-none","justify-content-around","list-unstyled","nav-bar-menu","py-3","align-items-center"],[1,"m-0","d-flex","justify-content-around","nav-bar-lang","align-items-center"],[3,"click"],["src","../../../assets/en.jpg","alt","EN","title","EN"],["src","../../../assets/fr.jpg","alt","FR","title","FR"],["src","../../../assets/de.jpg","alt","DE","title","DE"],[1,"px-3"],[3,"routerLink","fragment"],["class","px-3"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1),z(2,"img",2),o(),t(3,"ul",3),S(4,G6,3,3,"li",11,U6,!1,W6,1,0),C(7,"translate"),o(),t(8,"ul",4)(9,"li",5),i1("click",function(){return r.onChange("en")}),z(10,"img",6),o(),t(11,"li",5),i1("click",function(){return r.onChange("fr")}),z(12,"img",7),o(),t(13,"li",5),i1("click",function(){return r.onChange("de")}),z(14,"img",8),o()()()),n&2&&(l(4),k(d(7,1,"menu")))},dependencies:[n1,O],styles:[".nav-bar[_ngcontent-%COMP%]{background-color:#fff}.nav-bar-logo[_ngcontent-%COMP%]{height:60px;cursor:pointer}@media screen and (max-width: 992px){.nav-bar-logo[_ngcontent-%COMP%]{height:40px}}.nav-bar-menu[_ngcontent-%COMP%]{border:1px solid #fde9a5;box-shadow:2px 2px 5px 1px #fde9a5;border-radius:40px}.nav-bar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:auto 3%}.nav-bar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none;font-size:13px;font-weight:500}.nav-bar-lang[_ngcontent-%COMP%]{max-width:100px}.nav-bar-lang[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;cursor:pointer}.nav-bar-lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;margin:7px}"]});let c=a;return c})();var z4=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-header"]],decls:1,vars:0,template:function(n,r){n&1&&z(0,"app-nav-bar")},dependencies:[v4]});let c=a;return c})();var p4={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]};var p2={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};var h2={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var h4={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]};var H4={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var M4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var B1={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]};var C4={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var d4={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};var V4={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]};var u4={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};function g4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);a&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,i)}return e}function M(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?g4(Object(e),!0).forEach(function(i){E(c,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):g4(Object(e)).forEach(function(i){Object.defineProperty(c,i,Object.getOwnPropertyDescriptor(e,i))})}return c}function S2(c){"@babel/helpers - typeof";return S2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S2(c)}function $6(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function L4(c,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function X6(c,a,e){return a&&L4(c.prototype,a),e&&L4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function E(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function M3(c,a){return Q6(c)||c0(c,a)||Y4(c,a)||e0()}function i2(c){return K6(c)||J6(c)||Y4(c)||a0()}function K6(c){if(Array.isArray(c))return s3(c)}function Q6(c){if(Array.isArray(c))return c}function J6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function c0(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var i=[],n=!0,r=!1,s,f;try{for(e=e.call(c);!(n=(s=e.next()).done)&&(i.push(s.value),!(a&&i.length===a));n=!0);}catch(m){r=!0,f=m}finally{try{!n&&e.return!=null&&e.return()}finally{if(r)throw f}}return i}}function Y4(c,a){if(c){if(typeof c=="string")return s3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s3(c,a)}}function s3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,i=new Array(a);e<a;e++)i[e]=c[e];return i}function a0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var x4=function(){},C3={},$4={},X4=null,K4={mark:x4,measure:x4};try{typeof window<"u"&&(C3=window),typeof document<"u"&&($4=document),typeof MutationObserver<"u"&&(X4=MutationObserver),typeof performance<"u"&&(K4=performance)}catch{}var i0=C3.navigator||{},b4=i0.userAgent,N4=b4===void 0?"":b4,M1=C3,A=$4,S4=X4,H2=K4,r7=!!M1.document,f1=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Q4=~N4.indexOf("MSIE")||~N4.indexOf("Trident/"),M2,C2,d2,V2,u2,t1="___FONT_AWESOME___",t3=16,J4="fa",c6="svg-inline--fa",k1="data-fa-i2svg",o3="data-fa-pseudo-element",n0="data-fa-pseudo-element-pending",d3="data-prefix",V3="data-icon",k4="fontawesome-i2svg",r0="async",s0=["HTML","HEAD","STYLE","SCRIPT"],a6=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),y="classic",B="sharp",u3=[y,B];function n2(c){return new Proxy(c,{get:function(e,i){return i in e?e[i]:e[y]}})}var Q1=n2((M2={},E(M2,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(M2,B,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),M2)),J1=n2((C2={},E(C2,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(C2,B,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),C2)),c2=n2((d2={},E(d2,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(d2,B,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),d2)),t0=n2((V2={},E(V2,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(V2,B,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),V2)),o0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,e6="fa-layers-text",l0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,f0=n2((u2={},E(u2,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(u2,B,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),u2)),i6=[1,2,3,4,5,6,7,8,9,10],m0=i6.concat([11,12,13,14,15,16,17,18,19,20]),v0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a2=new Set;Object.keys(J1[y]).map(a2.add.bind(a2));Object.keys(J1[B]).map(a2.add.bind(a2));var z0=[].concat(u3,i2(a2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N1.GROUP,N1.SWAP_OPACITY,N1.PRIMARY,N1.SECONDARY]).concat(i6.map(function(c){return"".concat(c,"x")})).concat(m0.map(function(c){return"w-".concat(c)})),X1=M1.FontAwesomeConfig||{};function p0(c){var a=A.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function h0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}A&&typeof A.querySelector=="function"&&(w4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],w4.forEach(function(c){var a=M3(c,2),e=a[0],i=a[1],n=h0(p0(e));n!=null&&(X1[i]=n)}));var w4,n6={styleDefault:"solid",familyDefault:"classic",cssPrefix:J4,replacementClass:c6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X1.familyPrefix&&(X1.cssPrefix=X1.familyPrefix);var R1=M(M({},n6),X1);R1.autoReplaceSvg||(R1.observeMutations=!1);var V={};Object.keys(n6).forEach(function(c){Object.defineProperty(V,c,{enumerable:!0,set:function(e){R1[c]=e,K1.forEach(function(i){return i(V)})},get:function(){return R1[c]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(a){R1.cssPrefix=a,K1.forEach(function(e){return e(V)})},get:function(){return R1.cssPrefix}});M1.FontAwesomeConfig=V;var K1=[];function H0(c){return K1.push(c),function(){K1.splice(K1.indexOf(c),1)}}var H1=t3,r1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function M0(c){if(!(!c||!f1)){var a=A.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=A.head.childNodes,i=null,n=e.length-1;n>-1;n--){var r=e[n],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=r)}return A.head.insertBefore(a,i),c}}var C0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function e2(){for(var c=12,a="";c-- >0;)a+=C0[Math.random()*62|0];return a}function I1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function g3(c){return c.classList?I1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function r6(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d0(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(r6(c[e]),'" ')},"").trim()}function y2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function L3(c){return c.size!==r1.size||c.x!==r1.x||c.y!==r1.y||c.rotate!==r1.rotate||c.flipX||c.flipY}function V0(c){var a=c.transform,e=c.containerWidth,i=c.iconWidth,n={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(r," ").concat(s," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")};return{outer:n,inner:m,path:h}}function u0(c){var a=c.transform,e=c.width,i=e===void 0?t3:e,n=c.height,r=n===void 0?t3:n,s=c.startCentered,f=s===void 0?!1:s,m="";return f&&Q4?m+="translate(".concat(a.x/H1-i/2,"em, ").concat(a.y/H1-r/2,"em) "):f?m+="translate(calc(-50% + ".concat(a.x/H1,"em), calc(-50% + ").concat(a.y/H1,"em)) "):m+="translate(".concat(a.x/H1,"em, ").concat(a.y/H1,"em) "),m+="scale(".concat(a.size/H1*(a.flipX?-1:1),", ").concat(a.size/H1*(a.flipY?-1:1),") "),m+="rotate(".concat(a.rotate,"deg) "),m}var g0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function s6(){var c=J4,a=c6,e=V.cssPrefix,i=V.replacementClass,n=g0;if(e!==c||i!==a){var r=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");n=n.replace(r,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(f,".".concat(i))}return n}var y4=!1;function e3(){V.autoAddCss&&!y4&&(M0(s6()),y4=!0)}var L0={mixout:function(){return{dom:{css:s6,insertCss:e3}}},hooks:function(){return{beforeDOMElementCreation:function(){e3()},beforeI2svg:function(){e3()}}}},o1=M1||{};o1[t1]||(o1[t1]={});o1[t1].styles||(o1[t1].styles={});o1[t1].hooks||(o1[t1].hooks={});o1[t1].shims||(o1[t1].shims=[]);var Q=o1[t1],t6=[],x0=function c(){A.removeEventListener("DOMContentLoaded",c),k2=1,t6.map(function(a){return a()})},k2=!1;f1&&(k2=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),k2||A.addEventListener("DOMContentLoaded",x0));function b0(c){f1&&(k2?setTimeout(c,0):t6.push(c))}function r2(c){var a=c.tag,e=c.attributes,i=e===void 0?{}:e,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?r6(c):"<".concat(a," ").concat(d0(i),">").concat(r.map(r2).join(""),"</").concat(a,">")}function A4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var N0=function(a,e){return function(i,n,r,s){return a.call(e,i,n,r,s)}},i3=function(a,e,i,n){var r=Object.keys(a),s=r.length,f=n!==void 0?N0(e,n):e,m,h,p;for(i===void 0?(m=1,p=a[r[0]]):(m=0,p=i);m<s;m++)h=r[m],p=f(p,a[h],h,a);return p};function S0(c){for(var a=[],e=0,i=c.length;e<i;){var n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<i){var r=c.charCodeAt(e++);(r&64512)==56320?a.push(((n&1023)<<10)+(r&1023)+65536):(a.push(n),e--)}else a.push(n)}return a}function l3(c){var a=S0(c);return a.length===1?a[0].toString(16):null}function k0(c,a){var e=c.length,i=c.charCodeAt(a),n;return i>=55296&&i<=56319&&e>a+1&&(n=c.charCodeAt(a+1),n>=56320&&n<=57343)?(i-55296)*1024+n-56320+65536:i}function P4(c){return Object.keys(c).reduce(function(a,e){var i=c[e],n=!!i.icon;return n?a[i.iconName]=i.icon:a[e]=i,a},{})}function f3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e.skipHooks,n=i===void 0?!1:i,r=P4(a);typeof Q.hooks.addPack=="function"&&!n?Q.hooks.addPack(c,P4(a)):Q.styles[c]=M(M({},Q.styles[c]||{}),r),c==="fas"&&f3("fa",a)}var g2,L2,x2,D1=Q.styles,w0=Q.shims,y0=(g2={},E(g2,y,Object.values(c2[y])),E(g2,B,Object.values(c2[B])),g2),x3=null,o6={},l6={},f6={},m6={},v6={},A0=(L2={},E(L2,y,Object.keys(Q1[y])),E(L2,B,Object.keys(Q1[B])),L2);function P0(c){return~z0.indexOf(c)}function T0(c,a){var e=a.split("-"),i=e[0],n=e.slice(1).join("-");return i===c&&n!==""&&!P0(n)?n:null}var z6=function(){var a=function(r){return i3(D1,function(s,f,m){return s[m]=i3(f,r,{}),s},{})};o6=a(function(n,r,s){if(r[3]&&(n[r[3]]=s),r[2]){var f=r[2].filter(function(m){return typeof m=="number"});f.forEach(function(m){n[m.toString(16)]=s})}return n}),l6=a(function(n,r,s){if(n[s]=s,r[2]){var f=r[2].filter(function(m){return typeof m=="string"});f.forEach(function(m){n[m]=s})}return n}),v6=a(function(n,r,s){var f=r[2];return n[s]=s,f.forEach(function(m){n[m]=s}),n});var e="far"in D1||V.autoFetchSvg,i=i3(w0,function(n,r){var s=r[0],f=r[1],m=r[2];return f==="far"&&!e&&(f="fas"),typeof s=="string"&&(n.names[s]={prefix:f,iconName:m}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:f,iconName:m}),n},{names:{},unicodes:{}});f6=i.names,m6=i.unicodes,x3=A2(V.styleDefault,{family:V.familyDefault})};H0(function(c){x3=A2(c.styleDefault,{family:V.familyDefault})});z6();function b3(c,a){return(o6[c]||{})[a]}function F0(c,a){return(l6[c]||{})[a]}function S1(c,a){return(v6[c]||{})[a]}function p6(c){return f6[c]||{prefix:null,iconName:null}}function _0(c){var a=m6[c],e=b3("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C1(){return x3}var N3=function(){return{prefix:null,iconName:null,rest:[]}};function A2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,i=e===void 0?y:e,n=Q1[i][c],r=J1[i][c]||J1[i][n],s=c in Q.styles?c:null;return r||s||null}var T4=(x2={},E(x2,y,Object.keys(c2[y])),E(x2,B,Object.keys(c2[B])),x2);function P2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,n=i===void 0?!1:i,r=(a={},E(a,y,"".concat(V.cssPrefix,"-").concat(y)),E(a,B,"".concat(V.cssPrefix,"-").concat(B)),a),s=null,f=y;(c.includes(r[y])||c.some(function(h){return T4[y].includes(h)}))&&(f=y),(c.includes(r[B])||c.some(function(h){return T4[B].includes(h)}))&&(f=B);var m=c.reduce(function(h,p){var u=T0(V.cssPrefix,p);if(D1[p]?(p=y0[f].includes(p)?t0[f][p]:p,s=p,h.prefix=p):A0[f].indexOf(p)>-1?(s=p,h.prefix=A2(p,{family:f})):u?h.iconName=u:p!==V.replacementClass&&p!==r[y]&&p!==r[B]&&h.rest.push(p),!n&&h.prefix&&h.iconName){var x=s==="fa"?p6(h.iconName):{},b=S1(h.prefix,h.iconName);x.prefix&&(s=null),h.iconName=x.iconName||b||h.iconName,h.prefix=x.prefix||h.prefix,h.prefix==="far"&&!D1.far&&D1.fas&&!V.autoFetchSvg&&(h.prefix="fas")}return h},N3());return(c.includes("fa-brands")||c.includes("fab"))&&(m.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(m.prefix="fad"),!m.prefix&&f===B&&(D1.fass||V.autoFetchSvg)&&(m.prefix="fass",m.iconName=S1(m.prefix,m.iconName)||m.iconName),(m.prefix==="fa"||s==="fa")&&(m.prefix=C1()||"fas"),m}var O0=function(){function c(){$6(this,c),this.definitions={}}return X6(c,[{key:"add",value:function(){for(var e=this,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(f){e.definitions[f]=M(M({},e.definitions[f]||{}),s[f]),f3(f,s[f]);var m=c2[y][f];m&&f3(m,s[f]),z6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,i){var n=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(n).map(function(r){var s=n[r],f=s.prefix,m=s.iconName,h=s.icon,p=h[2];e[f]||(e[f]={}),p.length>0&&p.forEach(function(u){typeof u=="string"&&(e[f][u]=h)}),e[f][m]=h}),e}}]),c}(),F4=[],E1={},q1={},B0=Object.keys(q1);function D0(c,a){var e=a.mixoutsTo;return F4=c,E1={},Object.keys(q1).forEach(function(i){B0.indexOf(i)===-1&&delete q1[i]}),F4.forEach(function(i){var n=i.mixout?i.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(e[s]=n[s]),S2(n[s])==="object"&&Object.keys(n[s]).forEach(function(f){e[s]||(e[s]={}),e[s][f]=n[s][f]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(s){E1[s]||(E1[s]=[]),E1[s].push(r[s])})}i.provides&&i.provides(q1)}),e}function m3(c,a){for(var e=arguments.length,i=new Array(e>2?e-2:0),n=2;n<e;n++)i[n-2]=arguments[n];var r=E1[c]||[];return r.forEach(function(s){a=s.apply(null,[a].concat(i))}),a}function w1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),i=1;i<a;i++)e[i-1]=arguments[i];var n=E1[c]||[];n.forEach(function(r){r.apply(null,e)})}function l1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return q1[c]?q1[c].apply(null,a):void 0}function v3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||C1();if(a)return a=S1(e,a)||a,A4(h6.definitions,e,a)||A4(Q.styles,e,a)}var h6=new O0,E0=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,w1("noAuto")},q0={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f1?(w1("beforeI2svg",a),l1("pseudoElements2svg",a),l1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,b0(function(){I0({autoReplaceSvgRoot:e}),w1("watch",a)})}},R0={icon:function(a){if(a===null)return null;if(S2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:S1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],i=A2(a[0]);return{prefix:i,iconName:S1(i,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(V.cssPrefix,"-"))>-1||a.match(o0))){var n=P2(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||C1(),iconName:S1(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var r=C1();return{prefix:r,iconName:S1(r,a)||a}}}},Z={noAuto:E0,config:V,dom:q0,parse:R0,library:h6,findIconDefinition:v3,toHtml:r2},I0=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,i=e===void 0?A:e;(Object.keys(Q.styles).length>0||V.autoFetchSvg)&&f1&&V.autoReplaceSvg&&Z.dom.i2svg({node:i})};function T2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(i){return r2(i)})}}),Object.defineProperty(c,"node",{get:function(){if(f1){var i=A.createElement("div");return i.innerHTML=c.html,i.children}}}),c}function j0(c){var a=c.children,e=c.main,i=c.mask,n=c.attributes,r=c.styles,s=c.transform;if(L3(s)&&e.found&&!i.found){var f=e.width,m=e.height,h={x:f/m/2,y:.5};n.style=y2(M(M({},r),{},{"transform-origin":"".concat(h.x+s.x/16,"em ").concat(h.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function U0(c){var a=c.prefix,e=c.iconName,i=c.children,n=c.attributes,r=c.symbol,s=r===!0?"".concat(a,"-").concat(V.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},n),{},{id:s}),children:i}]}]}function S3(c){var a=c.icons,e=a.main,i=a.mask,n=c.prefix,r=c.iconName,s=c.transform,f=c.symbol,m=c.title,h=c.maskId,p=c.titleId,u=c.extra,x=c.watchable,b=x===void 0?!1:x,I=i.found?i:e,Y=I.width,K=I.height,J=n==="fak",q=[V.replacementClass,r?"".concat(V.cssPrefix,"-").concat(r):""].filter(function(m1){return u.classes.indexOf(m1)===-1}).filter(function(m1){return m1!==""||!!m1}).concat(u.classes).join(" "),j={children:[],attributes:M(M({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:q,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(Y," ").concat(K)})},c1=J&&!~u.classes.indexOf("fa-fw")?{width:"".concat(Y/K*16*.0625,"em")}:{};b&&(j.attributes[k1]=""),m&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(p||e2())},children:[m]}),delete j.attributes.title);var U=M(M({},j),{},{prefix:n,iconName:r,main:e,mask:i,maskId:h,transform:s,symbol:f,styles:M(M({},c1),u.styles)}),L1=i.found&&e.found?l1("generateAbstractMask",U)||{children:[],attributes:{}}:l1("generateAbstractIcon",U)||{children:[],attributes:{}},x1=L1.children,E2=L1.attributes;return U.children=x1,U.attributes=E2,f?U0(U):j0(U)}function _4(c){var a=c.content,e=c.width,i=c.height,n=c.transform,r=c.title,s=c.extra,f=c.watchable,m=f===void 0?!1:f,h=M(M(M({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});m&&(h[k1]="");var p=M({},s.styles);L3(n)&&(p.transform=u0({transform:n,startCentered:!0,width:e,height:i}),p["-webkit-transform"]=p.transform);var u=y2(p);u.length>0&&(h.style=u);var x=[];return x.push({tag:"span",attributes:h,children:[a]}),r&&x.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),x}function G0(c){var a=c.content,e=c.title,i=c.extra,n=M(M(M({},i.attributes),e?{title:e}:{}),{},{class:i.classes.join(" ")}),r=y2(i.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[a]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var n3=Q.styles;function z3(c){var a=c[0],e=c[1],i=c.slice(4),n=M3(i,1),r=n[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(N1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(N1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(N1.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:a,height:e,icon:s}}var W0={found:!1,width:512,height:512};function Z0(c,a){!a6&&!V.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function p3(c,a){var e=a;return a==="fa"&&V.styleDefault!==null&&(a=C1()),new Promise(function(i,n){var r={found:!1,width:512,height:512,icon:l1("missingIconAbstract")||{}};if(e==="fa"){var s=p6(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&n3[a]&&n3[a][c]){var f=n3[a][c];return i(z3(f))}Z0(c,a),i(M(M({},W0),{},{icon:V.showMissingIcons&&c?l1("missingIconAbstract")||{}:{}}))})}var O4=function(){},h3=V.measurePerformance&&H2&&H2.mark&&H2.measure?H2:{mark:O4,measure:O4},$1='FA "6.5.1"',Y0=function(a){return h3.mark("".concat($1," ").concat(a," begins")),function(){return H6(a)}},H6=function(a){h3.mark("".concat($1," ").concat(a," ends")),h3.measure("".concat($1," ").concat(a),"".concat($1," ").concat(a," begins"),"".concat($1," ").concat(a," ends"))},k3={begin:Y0,end:H6},b2=function(){};function B4(c){var a=c.getAttribute?c.getAttribute(k1):null;return typeof a=="string"}function $0(c){var a=c.getAttribute?c.getAttribute(d3):null,e=c.getAttribute?c.getAttribute(V3):null;return a&&e}function X0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(V.replacementClass)}function K0(){if(V.autoReplaceSvg===!0)return N2.replace;var c=N2[V.autoReplaceSvg];return c||N2.replace}function Q0(c){return A.createElementNS("http://www.w3.org/2000/svg",c)}function J0(c){return A.createElement(c)}function M6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,i=e===void 0?c.tag==="svg"?Q0:J0:e;if(typeof c=="string")return A.createTextNode(c);var n=i(c.tag);Object.keys(c.attributes||[]).forEach(function(s){n.setAttribute(s,c.attributes[s])});var r=c.children||[];return r.forEach(function(s){n.appendChild(M6(s,{ceFn:i}))}),n}function c8(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var N2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(n){e.parentNode.insertBefore(M6(n),e)}),e.getAttribute(k1)===null&&V.keepOriginalSource){var i=A.createComment(c8(e));e.parentNode.replaceChild(i,e)}else e.remove()},nest:function(a){var e=a[0],i=a[1];if(~g3(e).indexOf(V.replacementClass))return N2.replace(a);var n=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(f,m){return m===V.replacementClass||m.match(n)?f.toSvg.push(m):f.toNode.push(m),f},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var s=i.map(function(f){return r2(f)}).join(`
`);e.setAttribute(k1,""),e.innerHTML=s}};function D4(c){c()}function C6(c,a){var e=typeof a=="function"?a:b2;if(c.length===0)e();else{var i=D4;V.mutateApproach===r0&&(i=M1.requestAnimationFrame||D4),i(function(){var n=K0(),r=k3.begin("mutate");c.map(n),r(),e()})}}var w3=!1;function d6(){w3=!0}function H3(){w3=!1}var w2=null;function E4(c){if(S4&&V.observeMutations){var a=c.treeCallback,e=a===void 0?b2:a,i=c.nodeCallback,n=i===void 0?b2:i,r=c.pseudoElementsCallback,s=r===void 0?b2:r,f=c.observeMutationsRoot,m=f===void 0?A:f;w2=new S4(function(h){if(!w3){var p=C1();I1(h).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!B4(u.addedNodes[0])&&(V.searchPseudoElements&&s(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&V.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&B4(u.target)&&~v0.indexOf(u.attributeName))if(u.attributeName==="class"&&$0(u.target)){var x=P2(g3(u.target)),b=x.prefix,I=x.iconName;u.target.setAttribute(d3,b||p),I&&u.target.setAttribute(V3,I)}else X0(u.target)&&n(u.target)})}}),f1&&w2.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function a8(){w2&&w2.disconnect()}function e8(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(i,n){var r=n.split(":"),s=r[0],f=r.slice(1);return s&&f.length>0&&(i[s]=f.join(":").trim()),i},{})),e}function i8(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),i=c.innerText!==void 0?c.innerText.trim():"",n=P2(g3(c));return n.prefix||(n.prefix=C1()),a&&e&&(n.prefix=a,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&i.length>0&&(n.iconName=F0(n.prefix,c.innerText)||b3(n.prefix,l3(c.innerText))),!n.iconName&&V.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function n8(c){var a=I1(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),e=c.getAttribute("title"),i=c.getAttribute("data-fa-title-id");return V.autoA11y&&(e?a["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(i||e2()):(a["aria-hidden"]="true",a.focusable="false")),a}function r8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:r1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function q4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=i8(c),i=e.iconName,n=e.prefix,r=e.rest,s=n8(c),f=m3("parseNodeAttributes",{},c),m=a.styleParser?e8(c):[];return M({iconName:i,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:r1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:m,attributes:s}},f)}var s8=Q.styles;function V6(c){var a=V.autoReplaceSvg==="nest"?q4(c,{styleParser:!1}):q4(c);return~a.extra.classes.indexOf(e6)?l1("generateLayersText",c,a):l1("generateSvgReplacementMutation",c,a)}var d1=new Set;u3.map(function(c){d1.add("fa-".concat(c))});Object.keys(Q1[y]).map(d1.add.bind(d1));Object.keys(Q1[B]).map(d1.add.bind(d1));d1=i2(d1);function R4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f1)return Promise.resolve();var e=A.documentElement.classList,i=function(u){return e.add("".concat(k4,"-").concat(u))},n=function(u){return e.remove("".concat(k4,"-").concat(u))},r=V.autoFetchSvg?d1:u3.map(function(p){return"fa-".concat(p)}).concat(Object.keys(s8));r.includes("fa")||r.push("fa");var s=[".".concat(e6,":not([").concat(k1,"])")].concat(r.map(function(p){return".".concat(p,":not([").concat(k1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var f=[];try{f=I1(c.querySelectorAll(s))}catch{}if(f.length>0)i("pending"),n("complete");else return Promise.resolve();var m=k3.begin("onTree"),h=f.reduce(function(p,u){try{var x=V6(u);x&&p.push(x)}catch(b){a6||b.name==="MissingIcon"&&console.error(b)}return p},[]);return new Promise(function(p,u){Promise.all(h).then(function(x){C6(x,function(){i("active"),i("complete"),n("pending"),typeof a=="function"&&a(),m(),p()})}).catch(function(x){m(),u(x)})})}function t8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;V6(c).then(function(e){e&&C6([e],a)})}function o8(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(a||{}).icon?a:v3(a||{}),n=e.mask;return n&&(n=(n||{}).icon?n:v3(n||{})),c(i,M(M({},e),{},{mask:n}))}}var l8=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,n=i===void 0?r1:i,r=e.symbol,s=r===void 0?!1:r,f=e.mask,m=f===void 0?null:f,h=e.maskId,p=h===void 0?null:h,u=e.title,x=u===void 0?null:u,b=e.titleId,I=b===void 0?null:b,Y=e.classes,K=Y===void 0?[]:Y,J=e.attributes,q=J===void 0?{}:J,j=e.styles,c1=j===void 0?{}:j;if(a){var U=a.prefix,L1=a.iconName,x1=a.icon;return T2(M({type:"icon"},a),function(){return w1("beforeDOMElementCreation",{iconDefinition:a,params:e}),V.autoA11y&&(x?q["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(I||e2()):(q["aria-hidden"]="true",q.focusable="false")),S3({icons:{main:z3(x1),mask:m?z3(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:L1,transform:M(M({},r1),n),symbol:s,title:x,maskId:p,titleId:I,extra:{attributes:q,styles:c1,classes:K}})})}},f8={mixout:function(){return{icon:o8(l8)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=R4,e.nodeCallback=t8,e}}},provides:function(a){a.i2svg=function(e){var i=e.node,n=i===void 0?A:i,r=e.callback,s=r===void 0?function(){}:r;return R4(n,s)},a.generateSvgReplacementMutation=function(e,i){var n=i.iconName,r=i.title,s=i.titleId,f=i.prefix,m=i.transform,h=i.symbol,p=i.mask,u=i.maskId,x=i.extra;return new Promise(function(b,I){Promise.all([p3(n,f),p.iconName?p3(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(Y){var K=M3(Y,2),J=K[0],q=K[1];b([e,S3({icons:{main:J,mask:q},prefix:f,iconName:n,transform:m,symbol:h,maskId:u,title:r,titleId:s,extra:x,watchable:!0})])}).catch(I)})},a.generateAbstractIcon=function(e){var i=e.children,n=e.attributes,r=e.main,s=e.transform,f=e.styles,m=y2(f);m.length>0&&(n.style=m);var h;return L3(s)&&(h=l1("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),i.push(h||r.icon),{children:i,attributes:n}}}},m8={mixout:function(){return{layer:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.classes,r=n===void 0?[]:n;return T2({type:"layer"},function(){w1("beforeDOMElementCreation",{assembler:e,params:i});var s=[];return e(function(f){Array.isArray(f)?f.map(function(m){s=s.concat(m.abstract)}):s=s.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(i2(r)).join(" ")},children:s}]})}}}},v8={mixout:function(){return{counter:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.title,r=n===void 0?null:n,s=i.classes,f=s===void 0?[]:s,m=i.attributes,h=m===void 0?{}:m,p=i.styles,u=p===void 0?{}:p;return T2({type:"counter",content:e},function(){return w1("beforeDOMElementCreation",{content:e,params:i}),G0({content:e.toString(),title:r,extra:{attributes:h,styles:u,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(i2(f))}})})}}}},z8={mixout:function(){return{text:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.transform,r=n===void 0?r1:n,s=i.title,f=s===void 0?null:s,m=i.classes,h=m===void 0?[]:m,p=i.attributes,u=p===void 0?{}:p,x=i.styles,b=x===void 0?{}:x;return T2({type:"text",content:e},function(){return w1("beforeDOMElementCreation",{content:e,params:i}),_4({content:e,transform:M(M({},r1),r),title:f,extra:{attributes:u,styles:b,classes:["".concat(V.cssPrefix,"-layers-text")].concat(i2(h))}})})}}},provides:function(a){a.generateLayersText=function(e,i){var n=i.title,r=i.transform,s=i.extra,f=null,m=null;if(Q4){var h=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();f=p.width/h,m=p.height/h}return V.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,_4({content:e.innerHTML,width:f,height:m,transform:r,title:n,extra:s,watchable:!0})])}}},p8=new RegExp('"',"ug"),I4=[1105920,1112319];function h8(c){var a=c.replace(p8,""),e=k0(a,0),i=e>=I4[0]&&e<=I4[1],n=a.length===2?a[0]===a[1]:!1;return{value:l3(n?a[0]:a),isSecondary:i||n}}function j4(c,a){var e="".concat(n0).concat(a.replace(":","-"));return new Promise(function(i,n){if(c.getAttribute(e)!==null)return i();var r=I1(c.children),s=r.filter(function(x1){return x1.getAttribute(o3)===a})[0],f=M1.getComputedStyle(c,a),m=f.getPropertyValue("font-family").match(l0),h=f.getPropertyValue("font-weight"),p=f.getPropertyValue("content");if(s&&!m)return c.removeChild(s),i();if(m&&p!=="none"&&p!==""){var u=f.getPropertyValue("content"),x=~["Sharp"].indexOf(m[2])?B:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(m[2])?J1[x][m[2].toLowerCase()]:f0[x][h],I=h8(u),Y=I.value,K=I.isSecondary,J=m[0].startsWith("FontAwesome"),q=b3(b,Y),j=q;if(J){var c1=_0(Y);c1.iconName&&c1.prefix&&(q=c1.iconName,b=c1.prefix)}if(q&&!K&&(!s||s.getAttribute(d3)!==b||s.getAttribute(V3)!==j)){c.setAttribute(e,j),s&&c.removeChild(s);var U=r8(),L1=U.extra;L1.attributes[o3]=a,p3(q,b).then(function(x1){var E2=S3(M(M({},U),{},{icons:{main:x1,mask:N3()},prefix:b,iconName:j,extra:L1,watchable:!0})),m1=A.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(m1,c.firstChild):c.appendChild(m1),m1.outerHTML=E2.map(function(q6){return r2(q6)}).join(`
`),c.removeAttribute(e),i()}).catch(n)}else i()}else i()})}function H8(c){return Promise.all([j4(c,"::before"),j4(c,"::after")])}function M8(c){return c.parentNode!==document.head&&!~s0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(o3)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function U4(c){if(f1)return new Promise(function(a,e){var i=I1(c.querySelectorAll("*")).filter(M8).map(H8),n=k3.begin("searchPseudoElements");d6(),Promise.all(i).then(function(){n(),H3(),a()}).catch(function(){n(),H3(),e()})})}var C8={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=U4,e}}},provides:function(a){a.pseudoElements2svg=function(e){var i=e.node,n=i===void 0?A:i;V.searchPseudoElements&&U4(n)}}},G4=!1,d8={mixout:function(){return{dom:{unwatch:function(){d6(),G4=!0}}}},hooks:function(){return{bootstrap:function(){E4(m3("mutationObserverCallbacks",{}))},noAuto:function(){a8()},watch:function(e){var i=e.observeMutationsRoot;G4?H3():E4(m3("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},W4=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(i,n){var r=n.toLowerCase().split("-"),s=r[0],f=r.slice(1).join("-");if(s&&f==="h")return i.flipX=!0,i;if(s&&f==="v")return i.flipY=!0,i;if(f=parseFloat(f),isNaN(f))return i;switch(s){case"grow":i.size=i.size+f;break;case"shrink":i.size=i.size-f;break;case"left":i.x=i.x-f;break;case"right":i.x=i.x+f;break;case"up":i.y=i.y-f;break;case"down":i.y=i.y+f;break;case"rotate":i.rotate=i.rotate+f;break}return i},e)},V8={mixout:function(){return{parse:{transform:function(e){return W4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,i){var n=i.getAttribute("data-fa-transform");return n&&(e.transform=W4(n)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var i=e.main,n=e.transform,r=e.containerWidth,s=e.iconWidth,f={transform:"translate(".concat(r/2," 256)")},m="translate(".concat(n.x*32,", ").concat(n.y*32,") "),h="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),p="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(m," ").concat(h," ").concat(p)},x={transform:"translate(".concat(s/2*-1," -256)")},b={outer:f,inner:u,path:x};return{tag:"g",attributes:M({},b.outer),children:[{tag:"g",attributes:M({},b.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:M(M({},i.icon.attributes),b.path)}]}]}}}},r3={x:0,y:0,width:"100%",height:"100%"};function Z4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function u8(c){return c.tag==="g"?c.children:[c]}var g8={hooks:function(){return{parseNodeAttributes:function(e,i){var n=i.getAttribute("data-fa-mask"),r=n?P2(n.split(" ").map(function(s){return s.trim()})):N3();return r.prefix||(r.prefix=C1()),e.mask=r,e.maskId=i.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var i=e.children,n=e.attributes,r=e.main,s=e.mask,f=e.maskId,m=e.transform,h=r.width,p=r.icon,u=s.width,x=s.icon,b=V0({transform:m,containerWidth:u,iconWidth:h}),I={tag:"rect",attributes:M(M({},r3),{},{fill:"white"})},Y=p.children?{children:p.children.map(Z4)}:{},K={tag:"g",attributes:M({},b.inner),children:[Z4(M({tag:p.tag,attributes:M(M({},p.attributes),b.path)},Y))]},J={tag:"g",attributes:M({},b.outer),children:[K]},q="mask-".concat(f||e2()),j="clip-".concat(f||e2()),c1={tag:"mask",attributes:M(M({},r3),{},{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,J]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:u8(x)},c1]};return i.push(U,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(q,")")},r3)}),{children:i,attributes:n}}}},L8={provides:function(a){var e=!1;M1.matchMedia&&(e=M1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var i=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:M(M({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=M(M({},r),{},{attributeName:"opacity"}),f={tag:"circle",attributes:M(M({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:M(M({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(f),i.push({tag:"path",attributes:M(M({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:M(M({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||i.push({tag:"path",attributes:M(M({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},x8={hooks:function(){return{parseNodeAttributes:function(e,i){var n=i.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},b8=[L0,f8,m8,v8,z8,C8,d8,V8,g8,L8,x8];D0(b8,{mixoutsTo:Z});var s7=Z.noAuto,t7=Z.config,o7=Z.library,l7=Z.dom,u6=Z.parse,f7=Z.findIconDefinition,m7=Z.toHtml,g6=Z.icon,v7=Z.layer,N8=Z.text,S8=Z.counter;var k8=["*"],w8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},y8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},A8=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},P8=c=>c.prefix!==void 0&&c.iconName!==void 0,T8=(c,a)=>P8(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},F8=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=$({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),_8=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...i){for(let n of i){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let r of n.icon[2])typeof r=="string"&&(this.definitions[n.prefix][r]=n)}}addIconPacks(...i){for(let n of i){let r=Object.keys(n).map(s=>n[s]);this.addIcons(...r)}}getIconDefinition(i,n){return i in this.definitions&&n in this.definitions[i]?this.definitions[i][n]:null}};a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=$({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),O8=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=W2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[t2]});let c=a;return c})(),B8=(()=>{let a=class a{constructor(i,n){this.renderer=i,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};a.\u0275fac=function(n){return new(n||a)(F(F3),F(Y2))},a.\u0275cmp=L({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[t2,$2],ngContentSelectors:k8,decls:1,vars:0,template:function(n,r){n&1&&(q3(),R3(0))},encapsulation:2});let c=a;return c})(),R=(()=>{let a=class a{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,n,r,s,f){this.sanitizer=i,this.config=n,this.iconLibrary=r,this.stackItem=s,this.classes=[],f!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){y8();return}if(i){let n=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(n);if(r!=null){let s=this.buildParams();this.renderIcon(r,s)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let n=T8(i,this.config.defaultPrefix);if("icon"in n)return n;let r=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return r??(w8(n),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?u6.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:[...A8(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,n){let r=g6(i,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};a.\u0275fac=function(n){return new(n||a)(F(J3),F(F8),F(_8),F(O8,8),F(B8,8))},a.\u0275cmp=L({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,r){n&2&&(E3("innerHTML",r.renderedIconHTML,T3),O3("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[t2,$2],decls:0,vars:0,template:function(n,r){},encapsulation:2});let c=a;return c})();var L6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e1({type:a}),a.\u0275inj=a1({});let c=a;return c})();var u1=(()=>{let a=class a{constructor(){this.currentDate=new Date,this.currentYear=this.currentDate.getFullYear(),this.faCopyright=V4,this.faHeart=H4}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-footer"]],decls:16,vars:15,consts:[[1,"footer"],[1,"footer-block","m-auto","row","py-2"],[1,"col-lg-4","text-center","text-lg-start"],[3,"icon"],[1,"col-lg-4","text-center"],[2,"color","red",3,"icon"],[1,"col-lg-4","text-center","text-lg-end"],["href","mailto:safa1chaabane@gmail.com"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),z(3,"fa-icon",3),v(4),C(5,"translate"),o(),t(6,"div",4),v(7),C(8,"translate"),z(9,"fa-icon",5),v(10),C(11,"translate"),o(),t(12,"div",6)(13,"a",7),v(14),C(15,"translate"),o()()()()),n&2&&(l(3),H("icon",r.faCopyright),l(1),o2(" ",r.currentYear," ",d(5,7,"footer.copyright"),""),l(3),w("",d(8,9,"footer.makewith")," "),l(2),H("icon",r.faHeart),l(1),w(" ",d(11,11,"footer.makeby")," "),l(4),g(d(15,13,"footer.mail")))},dependencies:[R,O],styles:[".footer[_ngcontent-%COMP%]{background-color:#f1c73a;font-size:12px;font-weight:500}.footer-block[_ngcontent-%COMP%]{max-width:1600px;width:90%;border-top:1px solid #4c4c4c}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}"]});let c=a;return c})();function D8(c,a){if(c&1&&(t(0,"div",10)(1,"div",11)(2,"h3",12),v(3),o(),t(4,"p",13),v(5),o(),t(6,"p",14),z(7,"img",15),v(8),o()()()),c&2){let e=a.$implicit;l(3),w(" ",e==null?null:e.diplomaName,""),l(2),g(e==null?null:e.date),l(2),N("alt",e==null?null:e.logo),N("title",e==null?null:e.logo),H("src","/assets/icons/logo/"+((e==null?null:e.logo)||"")+".jpg",P),l(1),w(" ",e==null?null:e.schoolName,"")}}function E8(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var x6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-about-me"]],decls:22,vars:15,consts:[[1,"aboutme"],[1,"aboutme-block","m-auto","d-block"],[1,"row","m-auto","py-2","justify-content-between","align-items-center"],[1,"col-xl-12","position-relative","aboutme-block-col","mx-xl-0","m-auto"],[1,"aboutme-block-note","position-absolute"],[1,"aboutme-block-title","py-3"],[1,"aboutme-block-desc"],[1,"pt-3"],[1,""],[1,"row","qualifications-experience","my-3"],[1,"col-xl-3","col-lg-6","qualifications-experience-block"],["key","{$index}",1,"qualifications-experience-block-item","mx-auto","h-100"],[1,"position-relative","qualifications-experience-block-item-title"],[1,"qualifications-experience-block-item-date"],[1,"qualifications-experience-block-item-company"],[1,"qualifications-experience-block-item-company-logo",3,"src","alt","title"],["class","col-xl-3 col-lg-6 qualifications-experience-block"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),v(5),C(6,"translate"),o(),t(7,"h2",5),v(8),C(9,"translate"),o(),t(10,"div",6)(11,"p",7),v(12),C(13,"translate"),o(),t(14,"p",8),v(15),C(16,"translate"),o()()(),t(17,"div",9),S(18,D8,9,6,"div",16,D,!1,E8,2,0),C(21,"translate"),o()()()()),n&2&&(l(5),g(d(6,5,"aboutme.note")),l(3),g(d(9,7,"aboutme.title")),l(4),g(d(13,9,"aboutme.desc1")),l(3),g(d(16,11,"aboutme.desc2")),l(3),k(d(21,13,"qualifications.education")))},dependencies:[O],styles:['.aboutme[_ngcontent-%COMP%]{background:#f1c73a;background-position:top;background-repeat:no-repeat;min-height:95vh;padding-top:50px;padding-bottom:3%}.aboutme-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.aboutme-block-col[_ngcontent-%COMP%]{max-width:1300px}.aboutme-block-note[_ngcontent-%COMP%]{top:-20px;left:-15px;transform:rotate(-30deg);color:#25568c}.aboutme-block-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.aboutme-block-title[_ngcontent-%COMP%]{font-size:2rem}}.aboutme-block-desc[_ngcontent-%COMP%]{line-height:35px;padding-left:70px;position:relative}@media screen and (max-width: 992px){.aboutme-block-desc[_ngcontent-%COMP%]{padding-left:0}}.aboutme-block-desc[_ngcontent-%COMP%]:after{content:"";position:absolute;width:50px;left:10px;top:35px;height:1px;background-color:#000}@media screen and (max-width: 992px){.aboutme-block-desc[_ngcontent-%COMP%]:after{display:none}}','.qualifications[_ngcontent-%COMP%]{background-color:#f1c73a;min-height:95vh;padding-top:50px}.qualifications-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.qualifications-note[_ngcontent-%COMP%]{top:-20px;left:-20px;transform:rotate(-30deg);color:#25568c}.qualifications-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.qualifications-title[_ngcontent-%COMP%]{font-size:2rem}}.qualifications-experience-title[_ngcontent-%COMP%]{color:#25568c;font-size:36px}.qualifications-experience-block[_ngcontent-%COMP%]{border-bottom:4px solid #f1c73a}.qualifications-experience-block-2[_ngcontent-%COMP%]{position:relative;max-width:1458px}@media screen and (min-width: 1200px){.qualifications-experience-block-2[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:100%;width:2px;background-color:#25568c;top:0%;transform:translate(-50%);left:calc(50% + 1px)}}.qualifications-experience-block-item[_ngcontent-%COMP%]{max-width:700px;padding:35px;background-color:#fde9a54d;border-left:3px solid #25568C}.qualifications-experience-block-item-margin[_ngcontent-%COMP%]{margin-top:20px}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]{margin-top:-60px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(1){margin-top:-300px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(2){margin-top:-100px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(3){margin-top:-110px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(4){margin-top:-90px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(5){margin-top:-30px}}.qualifications-experience-block-item-title[_ngcontent-%COMP%]{font-size:18px;min-height:40px;display:flex;align-items:center}.qualifications-experience-block-item-title[_ngcontent-%COMP%]:after{content:"";position:absolute;background-color:#25568c;left:-35px;transform:translateY(-50%);top:50%;clip-path:polygon(60% 0,100% 50%,60% 100%,0 100%,0 0);display:block;width:30px;height:20px}.qualifications-experience-block-item-date[_ngcontent-%COMP%]{font-style:italic;font-size:12px;background-color:#25568c;display:inline-block;padding:5px;color:#fff}.qualifications-experience-block-item-company-logo[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.qualifications-experience-block-item-tasks[_ngcontent-%COMP%]{font-size:14px}.qualifications-experience-block-item-tools[_ngcontent-%COMP%]{font-size:14px;font-weight:500;font-style:italic;text-align:center}@media screen and (min-width: 1200px){.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{margin-right:calc(50% + 30px)!important}.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:2px;width:30px;background-color:#25568c;top:50%;transform:translateY(-50%);left:100%}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]{margin-left:calc(50% + 30px)!important}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:2px;width:31px;background-color:#25568c;top:50%;transform:translateY(-50%);right:100%}}.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{margin-right:auto}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]{margin-left:auto}.other-style[_ngcontent-%COMP%]{background-color:#f1c73a}']});let c=a;return c})();function R8(c,a){if(c&1&&(t(0,"div",11)(1,"div",12),z(2,"img",13),t(3,"p",14),v(4),C(5,"uppercase"),o()()()),c&2){let e=a.$implicit;l(2),I3("src","../../assets/icons/skills/",e,".png",P),N("title",e),H("alt",e),l(2),g(d(5,4,e))}}function I8(c,a){if(c&1&&(t(0,"div",8)(1,"p",9),v(2),o(),t(3,"div",10),S(4,R8,6,6,"div",15,D),o()()),c&2){let e=a.$implicit;l(2),g(e.title),l(2),k(e.list)}}function j8(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var b6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-skills"]],decls:21,vars:12,consts:[[1,"skills"],[1,"skills-block","row","m-auto"],[1,"row"],[1,"col","position-relative"],[1,"skills-note","position-absolute"],[1,"skills-title","py-3"],[1,"col-lg-6","position-relative"],["src","../../../assets/skills.jpg","alt","skills","title","skills",1,"skills-imgblock","h-100","w-100","object-fit-cover","d-block","m-auto"],["key","$index",1,"row"],[1,"skills-item-title","mb-1","mt-3"],[1,"row","flex-wrap"],[1,"col","position-relative","skills-col-2","m-2"],[1,"skills-item"],[1,"skills-item-img","m-auto","d-block",3,"src","alt","title"],[1,"text-center","skills-item-name"],["class","col position-relative skills-col-2 m-2"],["class","row","key","$index"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),v(5),C(6,"translate"),o(),t(7,"h2",5),v(8),C(9,"translate"),o(),t(10,"p"),v(11),C(12,"translate"),o()()(),t(13,"div",6),z(14,"img",7),o(),t(15,"div",6)(16,"div",2),S(17,I8,6,1,"div",16,D,!1,j8,2,0),C(20,"translate"),o()()()()),n&2&&(l(5),g(d(6,4,"skills.note")),l(3),g(d(9,6,"skills.title")),l(3),g(d(12,8,"skills.desc")),l(6),k(d(20,10,"skills.listSkills")))},dependencies:[O,$3],styles:[".skills[_ngcontent-%COMP%]{min-height:95vh;padding-top:60px;padding-bottom:3%}.skills-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.skills-imgblock[_ngcontent-%COMP%]{max-width:600px}.skills-note[_ngcontent-%COMP%]{top:-20px;left:-20px;transform:rotate(-30deg);color:#25568c}.skills-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.skills-title[_ngcontent-%COMP%]{font-size:2rem}}.skills-col-2[_ngcontent-%COMP%]{max-width:70px}.skills-item[_ngcontent-%COMP%]{background-color:#fde9a5;border-radius:5px;height:100%;width:70px;padding:5px}.skills-item[_ngcontent-%COMP%]:hover{background-color:#f1c73a}.skills-item-title[_ngcontent-%COMP%]{color:#25568c;font-weight:600;font-size:18px}.skills-item-img[_ngcontent-%COMP%]{width:100%;height:100%;max-width:40px;max-height:40px}.skills-item-name[_ngcontent-%COMP%]{font-size:11px;padding-top:4px}"]});let c=a;return c})();function G8(c,a){if(c&1&&(t(0,"div",11),z(1,"img",9),o()),c&2){let e=a.$implicit;l(1),N("alt",e),N("title",e),H("src","/assets/icons/skills/"+(e||"")+".png",P)}}function W8(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var Z8=(c,a)=>["/",c,"projects",a],Y8=c=>({data:c}),_2=(()=>{let a=class a{constructor(){this.link=h2,this.lang=""}ngOnInit(){this.lang=localStorage.getItem("lang")}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-card-project"]],inputs:{cardProject:"cardProject"},decls:15,vars:13,consts:[[1,"cardProject"],[3,"routerLink","state"],[1,"cardProject-link"],[1,"row","py-3","ps-2","me-2"],[1,"col"],[1,"cardProject-link-title"],[1,"col","cardProject-link-icon"],["size","xl",3,"icon"],[1,"position-relative","cardProject-img"],[1,"h-100","w-100",3,"src","alt","title"],[1,"row","p-4","d-flex","justify-content-center","flex-wrap"],[1,"cardProject-tools"],["class","cardProject-tools"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"a",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),v(6),o()(),t(7,"div",6),z(8,"fa-icon",7),o()(),t(9,"div",8),z(10,"img",9),o()()(),t(11,"div",10),S(12,G8,2,3,"div",12,D,!1,W8,2,0),o()()),n&2&&(l(1),H("routerLink",A1(8,Z8,r.lang,r.cardProject.urlProject))("state",y1(11,Y8,r.cardProject)),l(5),g(r.cardProject.name),l(2),H("icon",r.link),l(2),N("alt",r.cardProject.img[0]),N("title",r.cardProject.img[0]),H("src","/assets/projects/"+(r.cardProject.img[0]||"")+".png",P),l(2),k(r.cardProject.tools))},dependencies:[n1,R],styles:[".cardProject[_ngcontent-%COMP%]{border-top:2px solid #000000;background-color:#fde9a54d;margin:auto}.cardProject-img[_ngcontent-%COMP%]{overflow:hidden}.cardProject-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .3s}.cardProject[_ngcontent-%COMP%]:hover{background-color:#fde9a566}.cardProject[_ngcontent-%COMP%]:hover   .cardProject-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1)}@media screen and (max-width: 992px){.cardProject[_ngcontent-%COMP%]{max-width:550px}}.cardProject[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}.cardProject-link[_ngcontent-%COMP%]:hover{cursor:pointer}.cardProject-link[_ngcontent-%COMP%]:hover   .cardProject-link-title[_ngcontent-%COMP%]{color:#25568c}.cardProject-link-icon[_ngcontent-%COMP%]{max-width:fit-content;width:43px;height:38px;background-color:#25568c;padding:7px;border-radius:50%;color:#fff;transform:rotate(-45deg)}.cardProject-tools[_ngcontent-%COMP%]{max-width:50px;padding:10px}"]});let c=a;return c})();function $8(c,a){if(c&1&&(t(0,"div",8)(1,"div",9),z(2,"app-card-project",10),o()()),c&2){let e=a.$implicit;l(2),H("cardProject",e)}}function X8(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var K8=()=>["projects"],S6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-last-projects"]],decls:19,vars:18,consts:[[1,"lastProjects"],[1,"lastProjects-block","row","m-auto"],[1,"row"],[1,"col","position-relative"],[1,"lastProjects-note","position-absolute"],[1,"lastProjects-title","py-3"],[1,"row","lastProjects-block-2","position-relative"],[1,"lastProjects-link","position-relative",3,"routerLink"],[1,"col-lg-4","lastProjects-item"],[1,"lastProjectsitem","py-4","p-lg-0","d-flex","justify-content-center","flex-column"],[3,"cardProject"],["class","col-lg-4 lastProjects-item"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),v(5),C(6,"translate"),o(),t(7,"h2",5),v(8),C(9,"translate"),o()()(),t(10,"div",6),S(11,$8,3,1,"div",11,D,!1,X8,2,0),C(14,"slice"),C(15,"translate"),o(),t(16,"a",7),v(17),C(18,"translate"),o()()()),n&2&&(l(5),g(d(6,5,"projets.note")),l(3),g(d(9,7,"projets.title")),l(3),k(W3(14,9,d(15,13,"projets.listProjects"),0,3)),l(5),H("routerLink",U3(17,K8)),l(1),g(d(18,15,"projets.btn")))},dependencies:[n1,_2,O,l2],styles:[".lastProjects[_ngcontent-%COMP%]{background-color:#f1c73a;min-height:95vh;padding-top:70px;padding-bottom:3%}.lastProjects-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.lastProjects-block-2[_ngcontent-%COMP%]{z-index:100}.lastProjects-note[_ngcontent-%COMP%]{top:-20px!important;left:-15px;transform:rotate(-30deg);color:#25568c}.lastProjects-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700;max-width:200px}@media screen and (max-width: 992px){.lastProjects-title[_ngcontent-%COMP%]{font-size:2rem}}@media screen and (min-width: 992px){.lastProjects-item[_ngcontent-%COMP%]:nth-child(2){margin-top:-100px}}@media screen and (min-width: 992px){.lastProjects-item[_ngcontent-%COMP%]:nth-child(3){margin-top:-200px}}.lastProjects-link[_ngcontent-%COMP%]{color:#fff;margin:auto;width:fit-content;height:fit-content;display:block;background-color:#25568c;border:2px solid #25568C;padding:10px;text-transform:uppercase;font-weight:700;text-decoration:none;z-index:300}@media screen and (min-width: 992px){.lastProjects-link[_ngcontent-%COMP%]{margin-top:-170px;margin-left:auto;margin-right:45px}}.lastProjects-link[_ngcontent-%COMP%]:hover{color:#25568c;background-color:transparent}"]});let c=a;return c})();var O2={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]};var k6={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var J8=(c,a)=>a.id;function c5(c,a){if(c&1&&z(0,"fa-icon",13),c&2){let e=_(2);H("icon",e.faCode)}}function a5(c,a){if(c&1&&z(0,"fa-icon",13),c&2){let e=_(2);H("icon",e.faCircleExclamationCheck)}}function e5(c,a){if(c&1&&z(0,"fa-icon",13),c&2){let e=_(2);H("icon",e.faWandMagicSparkles)}}function i5(c,a){if(c&1&&(t(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10),W(4,c5,1,1,"fa-icon",11)(5,a5,1,1,"fa-icon",11)(6,e5,1,1,"fa-icon",11),o(),t(7,"div")(8,"h3"),v(9),o()()(),t(10,"p",12),v(11),o()()()),c&2){let e=a.$implicit;l(4),H("ngIf",e.icon==="faCode"),l(1),H("ngIf",e.icon==="faCircleExclamationCheck"),l(1),H("ngIf",e.icon==="faWandMagicSparkles"),l(3),w(" ",e==null?null:e.title,""),l(2),w(" ",e==null?null:e.description,"")}}function n5(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var w6=(()=>{let a=class a{constructor(){this.faLinkedinIn=O2,this.faCode=p2,this.faCircleExclamationCheck=h4,this.faWandMagicSparkles=p4}ngOnInit(){}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-services"]],decls:15,vars:9,consts:[[1,"services"],[1,"services-block","m-auto","d-block"],[1,"row","m-auto","py-5","justify-contentrdf-between","align-items-center"],[1,"col-xl-12","position-relative","services-block-col","mx-xl-0","m-auto"],[1,"services-block-note","position-absolute"],[1,"services-block-title"],[1,"row"],[1,"col-lg-4","p-4"],[1,"services-block-list","p-4","d-flex","justify-content-center","flex-column"],[1,"services-block-list-descblock"],[1,"services-block-list-icon"],[3,"icon",4,"ngIf"],[1,"d-none","services-block-list-desc","py-4"],[3,"icon"],["class","col-lg-4 p-4"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),v(5),C(6,"translate"),o(),t(7,"h2",5),v(8),C(9,"translate"),o()()(),t(10,"div",6),S(11,i5,12,5,"div",14,J8,!1,n5,2,0),C(14,"translate"),o()()()),n&2&&(l(5),g(d(6,3,"services.note")),l(3),g(d(9,5,"services.title")),l(3),k(d(14,7,"services.list")))},dependencies:[z1,R,O],styles:['@import"https://fonts.cdnfonts.com/css/happy-halloween";.services[_ngcontent-%COMP%]{background:#ffffff;background-position:top;background-repeat:no-repeat;min-height:95vh;padding-top:50px;padding-bottom:3%}.services-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.services-block-col[_ngcontent-%COMP%]{max-width:1300px}.services-block-note[_ngcontent-%COMP%]{top:-20px;left:-15px;transform:rotate(-30deg);color:#25568c}.services-block-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.services-block-title[_ngcontent-%COMP%]{font-size:2rem}}.services-block-desc[_ngcontent-%COMP%]{line-height:35px}.services-block-welcome[_ngcontent-%COMP%]{line-height:35px;font-weight:600;font-family:Happy Halloween,sans-serif;font-size:30px;text-transform:capitalize}.services-block-list[_ngcontent-%COMP%]{padding-top:3%;padding-bottom:7%;border-bottom:3px solid #25568C;background-color:#f5f4f4;color:#f1c73a;height:100%;transition:all .15s;min-height:400px;max-width:550px;margin:auto}.services-block-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{transition:all .15s}.services-block-list[_ngcontent-%COMP%]:hover{background-color:#25568c;color:#fff}.services-block-list[_ngcontent-%COMP%]:hover   .services-block-list-icon[_ngcontent-%COMP%]{font-size:30px;color:#25568c;background-color:#fff;border-radius:50% 50% 0;padding:10px 15px;width:fit-content;margin:0 15px 0 0}.services-block-list[_ngcontent-%COMP%]:hover   .services-block-list-descblock[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.services-block-list[_ngcontent-%COMP%]:hover   .services-block-list-desc[_ngcontent-%COMP%]{display:block!important;line-height:30px;font-size:18px}.services-block-list[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{font-size:1.35rem;text-align:start}.services-block-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;text-align:center;transition:color .05s!important}@media screen and (max-width: 992px){.services-block-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem}}.services-block-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;text-align:center;transition:color .05s!important}@media screen and (max-width: 992px){.services-block-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem}}.services-block-list-icon[_ngcontent-%COMP%]{color:#fff;background-color:#f1c73a;border-radius:50% 50% 0;padding:10px 15px;width:130px;margin:15px auto;font-size:80px;display:flex;justify-content:center}']});let c=a;return c})();function s5(c,a){if(c&1&&(t(0,"a",27),v(1),C(2,"translate"),z(3,"fa-icon",10),o()),c&2){let e=_();H("href","../../../assets/CV_Developer_fr.pdf",P),l(1),w(" ",d(2,3,"slider.cv")," "),l(2),H("icon",e.faArrowDown)}}function t5(c,a){if(c&1&&(t(0,"a",28),v(1),C(2,"translate"),z(3,"fa-icon",10),o()),c&2){let e=_();H("href","../../../assets/CV_Developer_en.pdf",P),l(1),w(" ",d(2,3,"slider.cv")," "),l(2),H("icon",e.faArrowDown)}}var o5=(()=>{let a=class a{transform(i){return` "${i}" `}};a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=s2({name:"wrapWithQuotes",type:a,pure:!0});let c=a;return c})(),y6=(()=>{let a=class a{constructor(){this.faPaperPlane=u4,this.faArrowDown=C4,this.faLinkedinIn=O2,this.faMailchimp=M4,this.faGithub=k6,this.url=""}ngOnInit(){this.url=localStorage.getItem("lang")||""}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-slider"]],decls:52,vars:39,consts:[[1,"row","slider","m-auto","align-items-lg-center","position-relative"],[1,"col-xl-5","order-1","order-xl-0"],[1,"slider-salutation"],["role","img","aria-labelledby","wave",1,"wave"],[1,"slider-name2"],[1,"slider-work"],[1,"slider-description"],[1,"row","py-3","slider-contact"],[1,"col-sm-6","slider-link","py-2"],[3,"routerLink","fragment"],[3,"icon"],[1,"col-sm-6","order-0","order-xl-1","slider-cv","py-2"],["download","CV safa chaabane FR",3,"href",4,"ngIf","ngIfElse"],["otherLink",""],[1,"row","slider-socialNetwork","justify-content-around","align-items-center","py-lg-5","py-1"],[1,"col-lg-6"],[1,"col-2","p-2"],["href","https://linkedin.com/in/safa-chaabane"],["size","xl",3,"icon"],["href","https://github.com/safachaabane"],["href","mailto:safa1chaabane@gmail.com"],[1,"col-xl-6","slider-img","position-relative"],[1,"slider-slogan","text-center","d-md-block","d-none"],["src","../../../assets/photosafaportfolio.png","alt","photo safa chaabane","title","","photo","","safa","","chaabane",""],[1,"col-1","d-flex"],[1,"slider-scroll-after","position-absolute","top-0"],[1,"slider-scroll","position-absolute","bottom-0",3,"routerLink","fragment"],["download","CV safa chaabane FR",3,"href"],["download","CV safa chaabane EN",3,"href"]],template:function(n,r){if(n&1&&(t(0,"div",0)(1,"div",1)(2,"p",2),v(3),C(4,"translate"),t(5,"span",3),v(6,"\u{1F44B}"),o()(),t(7,"h1")(8,"p",4),v(9),C(10,"translate"),C(11,"translate"),o(),t(12,"p",5),v(13),C(14,"translate"),o()(),t(15,"p",6),v(16),C(17,"translate"),o(),t(18,"div",7)(19,"div",8)(20,"a",9),v(21),C(22,"translate"),z(23,"fa-icon",10),o()(),t(24,"div",11),W(25,s5,4,5,"a",12)(26,t5,4,5,"ng-template",null,13,Z3),o()(),t(28,"div",14)(29,"div",15),v(30),C(31,"translate"),o(),t(32,"div",16)(33,"a",17),z(34,"fa-icon",18),o()(),t(35,"div",16)(36,"a",19),z(37,"fa-icon",18),o()(),t(38,"div",16)(39,"a",20),z(40,"fa-icon",18),o()()()(),t(41,"div",21)(42,"p",22),v(43),C(44,"wrapWithQuotes"),C(45,"translate"),o(),z(46,"img",23),o(),t(47,"div",24),z(48,"p",25),t(49,"p",26),v(50),C(51,"translate"),o()()()),n&2){let s=j3(27);l(3),w(" ",d(4,19,"slider.salutation")," "),l(6),o2(" ",d(10,21,"slider.name1")," ",d(11,23,"slider.name2"),", "),l(4),g(d(14,25,"slider.work")),l(3),g(d(17,27,"slider.description")),l(4),H("routerLink",".")("fragment","contact"),l(1),w("",d(22,29,"slider.contact")," "),l(2),H("icon",r.faPaperPlane),l(2),H("ngIf",r.url=="fr")("ngIfElse",s),l(5),g(d(31,31,"slider.socialNetwork")),l(4),H("icon",r.faLinkedinIn),l(3),H("icon",r.faGithub),l(3),H("icon",r.faMailchimp),l(3),w(" ",d(44,33,d(45,35,"slider.slogan"))," "),l(6),H("routerLink",".")("fragment","aboutme"),l(1),w(" ",d(51,37,"slider.scroll")," ")}},dependencies:[z1,n1,R,O,o5],styles:['@import"https://fonts.cdnfonts.com/css/happy-halloween";.slider[_ngcontent-%COMP%]{width:90%;max-width:1500px;height:95vh;padding-top:2%;padding-bottom:4%}.slider-salutation[_ngcontent-%COMP%]{font-size:2rem;font-weight:700}.slider-description[_ngcontent-%COMP%]{padding-left:15%;position:relative}.slider-description[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:12%;height:2px;background-color:#f1c73a;left:0;top:13px}.slider-name2[_ngcontent-%COMP%], .slider-work[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;text-transform:uppercase}.slider-contact[_ngcontent-%COMP%]{max-width:400px;margin:auto}.slider-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff;background-color:#25568c;padding:10px 15px;border-radius:15px;text-decoration:none;border:2px solid #25568C}.slider-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fff;color:#25568c}.slider-cv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-weight:600;color:#000;background-color:#f5f4f4;padding:10px 15px;border-radius:15px;text-decoration:none;border:2px solid #f5f4f4}.slider-cv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fff;color:#25568c}.slider-img[_ngcontent-%COMP%]{max-height:600px}.slider-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;max-width:500px;margin:auto;display:block}.slider-slogan[_ngcontent-%COMP%]{font-family:Happy Halloween,sans-serif;max-width:320px;float:right;font-size:22px;margin-bottom:-20px;z-index:2;position:inherit}.slider-scroll[_ngcontent-%COMP%]{writing-mode:vertical-lr;height:20%;right:-25px;cursor:pointer}.slider-scroll-after[_ngcontent-%COMP%]{height:70%;width:2px;background-color:#4c4c4c;right:0}.slider-socialNetwork[_ngcontent-%COMP%], .slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4c4c4c;font-weight:600}.slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#f5f4f4;padding:19px;display:block;border-radius:50%;width:60px;height:60px}.slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#25568c}.wave[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_wave .5s infinite linear;transform:rotate(50deg);transform-origin:right bottom}@keyframes _ngcontent-%COMP%_wave{0%{transform:rotate(20deg)}50%{transform:rotate(50deg)}to{transform:rotate(20deg)}}@media screen and (max-width: 1200px){.slider[_ngcontent-%COMP%]{height:auto}.slider-img[_ngcontent-%COMP%]{max-height:none}.slider-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}}@media screen and (max-width: 900px){.slider-salutation[_ngcontent-%COMP%], .slider-name2[_ngcontent-%COMP%], .slider-work[_ngcontent-%COMP%]{font-size:1rem}.slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;width:42px;height:42px}.slider-slogan[_ngcontent-%COMP%]{float:none;font-size:19px;margin-bottom:0;display:block;margin-left:auto;margin-right:auto;z-index:2;position:inherit}}']});let c=a;return c})();var f5=(c,a)=>a.id;function m5(c,a){if(c&1&&(t(0,"li",16),v(1),o()),c&2){let e=a.$implicit;l(1),g(e)}}var v5="qualifications-experience-block-item position-relative qualifications-experience-block-item-margin",z5=c=>[v5,c];function p5(c,a){if(c&1&&(t(0,"div")(1,"div",7)(2,"div",8)(3,"h3",9),v(4),o()(),t(5,"div",10)(6,"p",11),v(7),o()()(),t(8,"p",12),z(9,"img",13),v(10),o(),t(11,"ul",14),S(12,m5,2,1,"li",16,D),o(),t(14,"p",15),v(15),o()()),c&2){let e=a.$implicit;B3(y1(9,z5,e.id%2===0?"odd":"even").join(" ")),l(4),w(" ",e==null?null:e.workName,""),l(3),g(e==null?null:e.date),l(2),N("title",e==null?null:e.companyName),N("alt",e==null?null:e.companyName),H("src","/assets/icons/logo/"+((e==null?null:e.logo)||"")+".jpg",P),l(1),g(e==null?null:e.companyName),l(2),k(e==null?null:e.tasks),l(3),g(e.tools)}}function h5(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var A6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-qualifications"]],decls:15,vars:9,consts:[[1,"qualifications","m-0"],[1,"other-style"],[1,"qualifications-experience","qualifications-block","m-auto"],[1,"qualifications-experience-block","qualifications-experience-block-2","pb-5"],[1,"position-relative"],[1,"qualifications-note","position-absolute"],[1,"qualifications-title","py-3"],[1,"row"],[1,"col-9"],[1,"position-relative","qualifications-experience-block-item-title"],[1,"col-3"],[1,"qualifications-experience-block-item-date"],[1,"qualifications-experience-block-item-company"],[1,"qualifications-experience-block-item-company-logo","me-2",3,"src","title","alt"],[1,"qualifications-experience-block-item-tasks"],[1,"qualifications-experience-block-item-tools"],["key","{$index}"],[3,"class"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"p",5),v(6),C(7,"translate"),o(),t(8,"h2",6),v(9),C(10,"translate"),o()(),S(11,p5,16,11,"div",17,f5,!1,h5,2,0),C(14,"translate"),o()()()()),n&2&&(l(6),g(d(7,3,"qualifications.note")),l(3),g(d(10,5,"qualifications.titleExep")),l(2),k(d(14,7,"qualifications.experience")))},dependencies:[O],styles:['.qualifications[_ngcontent-%COMP%]{background-color:#f1c73a;min-height:95vh;padding-top:50px}.qualifications-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.qualifications-note[_ngcontent-%COMP%]{top:-20px;left:-20px;transform:rotate(-30deg);color:#25568c}.qualifications-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.qualifications-title[_ngcontent-%COMP%]{font-size:2rem}}.qualifications-experience-title[_ngcontent-%COMP%]{color:#25568c;font-size:36px}.qualifications-experience-block[_ngcontent-%COMP%]{border-bottom:4px solid #f1c73a}.qualifications-experience-block-2[_ngcontent-%COMP%]{position:relative;max-width:1458px}@media screen and (min-width: 1200px){.qualifications-experience-block-2[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:100%;width:2px;background-color:#25568c;top:0%;transform:translate(-50%);left:calc(50% + 1px)}}.qualifications-experience-block-item[_ngcontent-%COMP%]{max-width:700px;padding:35px;background-color:#fde9a54d;border-left:3px solid #25568C}.qualifications-experience-block-item-margin[_ngcontent-%COMP%]{margin-top:20px}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]{margin-top:-60px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(1){margin-top:-300px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(2){margin-top:-100px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(3){margin-top:-110px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(4){margin-top:-90px}}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]:nth-child(5){margin-top:-30px}}.qualifications-experience-block-item-title[_ngcontent-%COMP%]{font-size:18px;min-height:40px;display:flex;align-items:center}.qualifications-experience-block-item-title[_ngcontent-%COMP%]:after{content:"";position:absolute;background-color:#25568c;left:-35px;transform:translateY(-50%);top:50%;clip-path:polygon(60% 0,100% 50%,60% 100%,0 100%,0 0);display:block;width:30px;height:20px}.qualifications-experience-block-item-date[_ngcontent-%COMP%]{font-style:italic;font-size:12px;background-color:#25568c;display:inline-block;padding:5px;color:#fff}.qualifications-experience-block-item-company-logo[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.qualifications-experience-block-item-tasks[_ngcontent-%COMP%]{font-size:14px}.qualifications-experience-block-item-tools[_ngcontent-%COMP%]{font-size:14px;font-weight:500;font-style:italic;text-align:center}@media screen and (min-width: 1200px){.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{margin-right:calc(50% + 30px)!important}.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:2px;width:30px;background-color:#25568c;top:50%;transform:translateY(-50%);left:100%}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]{margin-left:calc(50% + 30px)!important}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:2px;width:31px;background-color:#25568c;top:50%;transform:translateY(-50%);right:100%}}.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{margin-right:auto}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]{margin-left:auto}.other-style[_ngcontent-%COMP%]{background-color:#f1c73a}']});let c=a;return c})();var g1=(()=>{let a=class a{constructor(){this.link=h2}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-contact"]],decls:38,vars:28,consts:[[1,"contact"],[1,"contact-block","row","m-auto"],[1,"row"],[1,"col-lg-6","position-relative"],[1,"contact-note","position-absolute"],[1,"contact-title","py-3"],[1,"contact-desc"],["href","mailto:safa1chaabane@gmail.com"],[1,"contact-desc-icon","ms-2"],[3,"icon"],[1,"col-lg-6"],["action","https://formspree.io/f/xwkgvvvp","method","POST"],[1,"col-md-6"],["type","text","name","Name",3,"placeholder"],["type","email","name","email",3,"placeholder"],[1,"col-12"],["type","text","name","Subject",3,"placeholder"],["name","Message",3,"placeholder"],["type","submit"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),v(5),C(6,"translate"),o(),t(7,"h2",5),v(8),C(9,"translate"),o(),t(10,"p",6),v(11),C(12,"translate"),t(13,"a",7),v(14),C(15,"translate"),t(16,"span",8),z(17,"fa-icon",9),o()()()(),t(18,"div",10)(19,"form",11)(20,"div",2)(21,"div",12),z(22,"input",13),C(23,"translate"),o(),t(24,"div",12),z(25,"input",14),C(26,"translate"),o()(),t(27,"div",2)(28,"div",15),z(29,"input",16),C(30,"translate"),o()(),t(31,"div",2)(32,"div",15),z(33,"textarea",17),C(34,"translate"),o()(),t(35,"button",18),v(36),C(37,"translate"),o()()()()()()),n&2&&(l(5),g(d(6,10,"contact.note")),l(3),g(d(9,12,"contact.title")),l(3),w("",d(12,14,"contact.desc")," "),l(3),w("",d(15,16,"contact.link")," "),l(3),H("icon",r.link),l(5),H("placeholder",d(23,18,"contact.nameform")),l(3),H("placeholder",d(26,20,"contact.mailform")),l(4),H("placeholder",d(30,22,"contact.subjectform")),l(4),H("placeholder",d(34,24,"contact.messageform")),l(3),g(d(37,26,"contact.btnform")))},dependencies:[R,O],styles:[".contact[_ngcontent-%COMP%]{background-color:#f1c73a;padding-top:60px;padding-bottom:3%}.contact-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.contact-note[_ngcontent-%COMP%]{top:-20px!important;left:-20px;transform:rotate(-30deg);color:#25568c}.contact-title[_ngcontent-%COMP%]{font-size:4rem;font-weight:700}@media screen and (max-width: 992px){.contact-title[_ngcontent-%COMP%]{font-size:2rem}}.contact-desc[_ngcontent-%COMP%]{font-size:2rem;font-weight:700}.contact-desc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#25568c}.contact-desc-icon[_ngcontent-%COMP%]{max-width:fit-content;width:fit-content;height:fit-content;display:inline-block;background-color:#25568c;padding:0 10px;border-radius:50%;color:#fff;transform:rotate(-45deg)}.contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:.75rem;margin:.7rem auto;border:none;border-radius:20px;box-shadow:4px 3px 8px #f5f4f480;background-color:#fff;width:100%}.contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem;margin:.7rem auto;border:2px solid #25568C;border-radius:20px;color:#fff;background-color:#25568c;width:fit-content}.contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#25568c;background-color:#fff;font-weight:500}"]});let c=a;return c})();var M5=(c,a)=>["/",c,"blogs",a],C5=c=>({data:c});function d5(c,a){if(c&1&&(t(0,"div",6)(1,"a",7)(2,"div",8)(3,"div",9),z(4,"img",10),o(),t(5,"h3",11),v(6),o()()()()),c&2){let e=a.$implicit,i=_();l(1),H("routerLink",A1(6,M5,i.lang,e.slug))("state",y1(9,C5,e)),l(3),N("alt",e.img),N("title",e.img),H("src","/assets/blog/"+(e.img||"")+".jpg",P),l(2),g(e.title)}}function V5(c,a){c&1&&v(0," Please wait ")}var P6=(()=>{let a=class a{constructor(){this.lang=""}ngOnInit(){this.lang=localStorage.getItem("lang")}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-blogs"]],decls:14,vars:9,consts:[[1,"blogs","m-auto","d-block"],[1,"row","m-auto","py-2","justify-content-between","align-items-center"],[1,"col-xl-12","position-relative","mx-xl-0","m-auto"],[1,"blogs-note","position-absolute"],[1,"blogs-title","py-3"],[1,"row"],[1,"col-lg-4","p-4"],[3,"routerLink","state"],[1,"blogs-item","p-4"],[1,"position-relative"],[1,"h-100","w-100",3,"src","alt","title"],[1,"p-3"],["class","col-lg-4 p-4"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),v(4),C(5,"translate"),o(),t(6,"h2",4),v(7),C(8,"translate"),o()()(),t(9,"div",5),S(10,d5,7,11,"div",12,D,!1,V5,1,0),C(13,"translate"),o()()),n&2&&(l(4),g(d(5,3,"blogs.note")),l(3),g(d(8,5,"blogs.title")),l(3),k(d(13,7,"blogs.listBlog")))},dependencies:[n1,O],styles:[".blogs[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:3%;max-width:1500px;width:90%}.blogs-note[_ngcontent-%COMP%]{top:-20px;left:-20px;transform:rotate(-30deg);color:#25568c}.blogs-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.blogs-title[_ngcontent-%COMP%]{font-size:2rem}}.blogs-item[_ngcontent-%COMP%]{background-color:#fde9a5;height:100%;cursor:pointer}.blogs-item[_ngcontent-%COMP%]:hover{background-color:#f1c73a}.blogs-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:600}.blogs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.blogs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:180px}"]});let c=a;return c})();var T6=(()=>{let a=class a{constructor(){}ngOnInit(){}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-home"]],decls:19,vars:0,consts:[["id","Home",1,"home-page","m-auto","d-block"],["id","aboutme"],["id","competances"],["id","experiences"],["id","services"],["id","projets"],["id","blog"],["id","contact"]],template:function(n,r){n&1&&(t(0,"div"),z(1,"app-header"),t(2,"section",0),z(3,"app-slider"),o(),t(4,"section",1),z(5,"app-about-me"),o(),t(6,"section",2),z(7,"app-skills"),o(),t(8,"section",3),z(9,"app-qualifications"),o(),t(10,"section",4),z(11,"app-services"),o(),t(12,"section",5),z(13,"app-last-projects"),o(),t(14,"section",6),z(15,"app-blogs"),o(),t(16,"section",7),z(17,"app-contact"),o(),z(18,"app-footer"),o())},dependencies:[z4,u1,x6,b6,S6,w6,y6,A6,g1,P6]});let c=a;return c})();var F6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=L({type:a,selectors:[["app-error"]],decls:2,vars:0,template:function(n,r){n&1&&(t(0,"p"),v(1,"error works!"),o())}});let c=a;return c})();function g5(c,a){if(c&1&&(t(0,"div",9)(1,"div",10),z(2,"app-card-project",11),o()()),c&2){let e=a.$implicit;l(2),H("cardProject",e)}}function L5(c,a){c&1&&(t(0,"span"),v(1,"Please wait"),o())}var _6=(()=>{let a=class a{constructor(i){this.location=i,this.faLeft=B1}backLastPage(){this.location.back()}};a.\u0275fac=function(n){return new(n||a)(F(P1))},a.\u0275cmp=L({type:a,selectors:[["app-projects"]],decls:17,vars:7,consts:[[1,"all-projects"],[1,"all-projects-block","row","m-auto"],[1,"row","all-projects-title","m-auto","py-4","align-items-center","my-md-5"],[1,"col-1","ps-0"],[1,"all-projects-title-icon",3,"click"],["size","xl",3,"icon"],[1,"col","all-projects-title-text","position-relative"],[1,"text-center"],[1,"row","m-auto"],[1,"col-lg-4","all-projects-item"],[1,"p-lg-2","py-4","d-flex","justify-content-center","flex-column"],[3,"cardProject"],["class","col-lg-4 all-projects-item"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),i1("click",function(){return r.backLastPage()}),z(5,"fa-icon",5),o()(),t(6,"div",6)(7,"h1",7),v(8),C(9,"translate"),o()()(),t(10,"div",8),S(11,g5,3,1,"div",12,D,!1,L5,2,0),C(14,"translate"),o()()(),z(15,"app-contact")(16,"app-footer")),n&2&&(l(5),H("icon",r.faLeft),l(3),g(d(9,3,"projets.titlePage")),l(3),k(d(14,5,"projets.listProjects")))},dependencies:[R,u1,_2,g1,O],styles:[".all-projects[_ngcontent-%COMP%]{width:100%;padding-bottom:3%;margin:auto}.all-projects-title[_ngcontent-%COMP%]{max-width:1400px}.all-projects-title-icon[_ngcontent-%COMP%]{max-width:fit-content;width:43px;height:43px;background-color:#25568c;padding:7px;border-radius:50%;color:#fff}@media screen and (max-width: 992px){.all-projects-title-icon[_ngcontent-%COMP%]{margin-top:-20px}}.all-projects-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-left:-130px;z-index:-1!important;position:relative;font-size:5rem;font-weight:700}@media screen and (max-width: 700px){.all-projects-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;margin-left:-50px}}@media screen and (max-width: 500px){.all-projects-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;margin-left:0}}"]});let c=a;return c})();function x5(c,a){if(c&1&&z(0,"img",19),c&2){let e=_();N("alt",e.dataProjet.img[0]),N("title",e.dataProjet.img[0]),H("src","/assets/projects/"+(e.dataProjet.img[0]||"")+".png",P)}}function b5(c,a){c&1&&(t(0,"video",20),z(1,"source",21)(2,"source",22)(3,"source",23),t(4,"object",24),z(5,"embed",25),o()())}function N5(c,a){if(c&1&&(t(0,"h3"),v(1),o()),c&2){let e=_();l(1),w(" ",e.dataProjet.titleProjet," ")}}function S5(c,a){if(c&1&&(t(0,"p"),v(1),o()),c&2){let e=a.$implicit;l(1),g(e)}}function k5(c,a){c&1&&v(0," pas de descriptions ")}function w5(c,a){if(c&1&&(t(0,"div",26),z(1,"img",27),o()),c&2){let e=a.$implicit;l(1),N("alt",e),N("title",e),H("src","/assets/icons/skills/"+(e||"")+".png",P)}}function y5(c,a){c&1&&v(0," pas de tools ")}function A5(c,a){if(c&1&&(t(0,"div",28)(1,"a",29),z(2,"fa-icon",4),v(3),o()()),c&2){let e=_();l(1),N("href",e.dataProjet.urlCode,P),l(1),H("icon",e.faCode),l(1),w(" ",e.dataProjet.btncode,"")}}function P5(c,a){if(c&1&&(t(0,"div",28)(1,"a",30),z(2,"fa-icon",4),v(3),o()()),c&2){let e=_();l(1),N("href",e.dataProjet.urlSite[0],P),l(1),H("icon",e.faLink),l(1),w(" ",e.dataProjet.btnsite,"")}}function T5(c,a){if(c&1&&z(0,"img",27),c&2){let e=_().$implicit;N("alt",e),N("title",e),H("src","/assets/projects/"+(e||"")+".png",P)}}function F5(c,a){if(c&1&&(t(0,"a",34),z(1,"img",35),o()),c&2){let e=_(),i=e.$index,n=e.$implicit,r=_();N("href",r.dataProjet.urlSite[i],P),l(1),N("alt",n),N("title",n),H("src","/assets/projects/"+(n||"")+".png",P)}}var _5=(c,a)=>({"col-lg-6 md-6 position-relative my-5":c,"col-lg-4 md-6 position-relative my-2":a});function O5(c,a){if(c&1&&(t(0,"div",31),W(1,T5,1,3,"img",32)(2,F5,2,4,"a",33),o()),c&2){let e=_();H("ngClass",A1(3,_5,e.dataProjet.img.length<4,e.dataProjet.img.length>=4)),l(1),H("ngIf",e.dataProjet.img.length==1),l(1),H("ngIf",e.dataProjet.urlSite.length>1)}}function B5(c,a){}var O6=(()=>{let a=class a{constructor(i){this.location=i,this.dataProjet=history.state.data,this.faLeft=B1,this.faLink=d4,this.faCode=p2}ngOnInit(){}backLastPage(){this.location.back()}};a.\u0275fac=function(n){return new(n||a)(F(P1))},a.\u0275cmp=L({type:a,selectors:[["app-project"]],decls:36,vars:15,consts:[[1,"projet","m-auto"],[1,"row","projet-title","py-4"],[1,"col-1","ps-0"],[1,"projet-title-icon",3,"click"],["size","xl",3,"icon"],[1,"col","projet-title-text","position-relative"],[1,"text-end"],[1,"position-relative"],["class","h-100 w-100 m-auto",3,"src","alt","title",4,"ngIf"],["width","100%","poster","/assets/projects/zishopping.png","controls","",4,"ngIf"],[1,"row"],[1,"col-lg-6"],[1,"py-2"],[4,"ngIf"],[1,"col-lg-6","projet-informations"],[1,"row","p-4","d-flex","justify-content-center","flex-wrap"],[1,"row","justify-content-center","projet-link"],["class","col",4,"ngIf"],[1,"row","d-flex","justify-content-center","flex-wrap","py-5"],[1,"h-100","w-100","m-auto",3,"src","alt","title"],["width","100%","poster","/assets/projects/zishopping.png","controls",""],["src","/assets/projects/zishopping.mp4","type","video/mp4"],["src","/assets/projects/zishopping.ogg","type","video/ogg"],["src","/assets/projects/zishopping.webm","type","video/webm"],["data",Z2`/assets/projects/zishopping.mp4`],["src",Z2`/assets/projects/zishopping.swf`],[1,"projet-informations-tools"],[1,"h-100","w-100",3,"src","alt","title"],[1,"col"],["target","_blank","rel","noopener noreferrer",1,"m-auto","d-block",3,"href"],["target","_blank","rel","noopener noreferrer",1,"w-fit-content","m-auto","d-block",3,"href"],[3,"ngClass"],["class","h-100 w-100",3,"src","alt","title",4,"ngIf"],["target","_blank","rel","noopener noreferrer",3,"href",4,"ngIf"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"h-100","w-100","my-5",3,"src","alt","title"],["class","projet-informations-tools"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),i1("click",function(){return r.backLastPage()}),z(4,"fa-icon",4),o()(),t(5,"div",5)(6,"h1",6),v(7),o()()(),t(8,"div",7),W(9,x5,1,3,"img",8)(10,b5,6,0,"video",9),o(),t(11,"div",10)(12,"div",11)(13,"h2",12),v(14),o(),W(15,N5,2,1,"h3",13),S(16,S5,2,1,"p",null,D,!1,k5,1,0),o(),t(19,"div",14)(20,"h2",12),v(21),o(),t(22,"div",15),S(23,w5,2,3,"div",36,D,!1,y5,1,0),o()()(),t(26,"div",16),W(27,A5,4,3,"div",17)(28,P5,4,3,"div",17),o(),t(29,"div",18),S(30,O5,3,6,"div",31,D,!1,B5,0,0),C(33,"slice"),o()(),z(34,"app-contact")(35,"app-footer")),n&2&&(l(4),H("icon",r.faLeft),l(3),g(r.dataProjet.name),l(2),H("ngIf",!r.dataProjet.video),l(1),H("ngIf",r.dataProjet.video),l(4),g(r.dataProjet.titleInfos),l(1),H("ngIf",r.dataProjet.titleProjet.length>0),l(1),k(r.dataProjet.desc),l(5),g(r.dataProjet.titleTools),l(2),k(r.dataProjet.tools),l(4),H("ngIf",r.dataProjet.urlCode.length>0),l(1),H("ngIf",r.dataProjet.urlSite.length==1),l(2),k(G3(33,12,r.dataProjet.img,1)))},dependencies:[Y3,z1,R,u1,g1,l2],styles:['.projet[_ngcontent-%COMP%]{max-width:1500px;width:90%;padding-top:3%;padding-bottom:3%}.projet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#25568c}.projet-title-icon[_ngcontent-%COMP%]{max-width:fit-content;width:43px;height:43px;background-color:#25568c;padding:7px;border-radius:50%;color:#fff}@media screen and (max-width: 992px){.projet-title-icon[_ngcontent-%COMP%]{margin-top:-20px}}.projet-title-text[_ngcontent-%COMP%]{color:#25568c;text-transform:uppercase}@media screen and (max-width: 992px){.projet-title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.2rem!important}}.projet-title-text[_ngcontent-%COMP%]:after{content:"";position:absolute;right:0;width:100%;border-bottom:2px solid #25568C}.projet-informations-tools[_ngcontent-%COMP%]{max-width:70px;padding:10px}.projet-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:fit-content;text-decoration:none;border:2px solid #f1c73a;background-color:#f1c73a;color:#000;padding:8px 12px;font-weight:500;font-size:18px;margin:15px auto}.projet-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:transparent;color:#f1c73a}']});let c=a;return c})();function D5(c,a){if(c&1&&(t(0,"h2",13),v(1),o()),c&2){let e=_().$implicit;l(1),g(e.title)}}function E5(c,a){if(c&1&&(t(0,"p",14),v(1),o()),c&2){let e=_().$implicit;l(1),g(e.subtitle)}}function q5(c,a){if(c&1&&(t(0,"p",15),v(1),o()),c&2){let e=_().$implicit;l(1),g(e.desc)}}function R5(c,a){if(c&1&&W(0,D5,2,1,"h2",10)(1,E5,2,1,"p",11)(2,q5,2,1,"p",12),c&2){let e=a.$implicit;H("ngIf",e.title.length>0),l(1),H("ngIf",e.subtitle.length>0),l(1),H("ngIf",e.desc.length>0)}}var B6=(()=>{let a=class a{constructor(i){this.location=i,this.dataBlog=history.state.data,this.faLeft=B1}backLastPage(){this.location.back()}};a.\u0275fac=function(n){return new(n||a)(F(P1))},a.\u0275cmp=L({type:a,selectors:[["app-blog"]],decls:16,vars:5,consts:[[1,"blog","my-5"],[1,"row","blog-title","m-auto","py-5","align-items-center"],[1,"col-1","ps-0"],[1,"blog-title-icon",3,"click"],["size","xl",3,"icon"],[1,"col","blog-title-text","position-relative"],[1,"text-start"],[1,"position-relative","blog-img"],[1,"h-100","m-auto","d-block","object-fit-cover",3,"src","alt","title"],[1,"blog-desc","m-auto","my-4"],["class","py-3",4,"ngIf"],["class","py-2  blog-desc-subtitle",4,"ngIf"],["class","py-1",4,"ngIf"],[1,"py-3"],[1,"py-2","blog-desc-subtitle"],[1,"py-1"]],template:function(n,r){n&1&&(t(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"button",3),i1("click",function(){return r.backLastPage()}),z(5,"fa-icon",4),o()(),t(6,"div",5)(7,"h1",6),v(8),o()()(),t(9,"div",7),z(10,"img",8),t(11,"div",9),S(12,R5,3,3,null,null,D),o()()(),z(14,"app-contact")(15,"app-footer"),o()),n&2&&(l(5),H("icon",r.faLeft),l(3),g(r.dataBlog==null?null:r.dataBlog.title),l(2),H("src","/assets/blog/"+(r.dataBlog.img||"")+".jpg",P)("alt",r.dataBlog.img)("title",r.dataBlog.img),l(2),k(r.dataBlog.desc))},dependencies:[z1,R,u1,g1],styles:[".blog[_ngcontent-%COMP%]{width:90%;margin:auto;font-size:1.1rem}.blog-title[_ngcontent-%COMP%]{max-width:1400px}.blog-title-icon[_ngcontent-%COMP%]{max-width:fit-content;width:43px;height:43px;background-color:#25568c;padding:7px;border-radius:50%;color:#fff}@media screen and (max-width: 992px){.blog-title-icon[_ngcontent-%COMP%]{margin-top:-20px}}.blog-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{z-index:-1!important;position:relative;font-size:3rem;font-weight:700}@media screen and (max-width: 700px){.blog-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}@media screen and (max-width: 500px){.blog-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.2rem;margin-left:20px}}.blog-img[_ngcontent-%COMP%]{max-width:1200px;margin:auto}.blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%}.blog-desc[_ngcontent-%COMP%]{max-width:1200px}.blog-desc-subtitle[_ngcontent-%COMP%]{color:#25568c;font-weight:700!important}"]});let c=a;return c})();var I5=[{path:"",children:[{path:"",component:O1,pathMatch:"full"},{path:":lang",pathMatch:"full",canActivate:[m4],component:T6},{path:":lang/projects",children:[{path:"",component:_6},{path:":urlProject",component:O6}]},{path:":lang/blogs",children:[{path:":urlBlog",component:B6}]}]},{path:"404",component:F6},{path:"**",redirectTo:"404"}],D6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e1({type:a}),a.\u0275inj=a1({imports:[X2.forRoot(I5,{scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}),X2]});let c=a;return c})();var D2=class{http;prefix;suffix;constructor(a,e="/assets/i18n/",i=".json"){this.http=a,this.prefix=e,this.suffix=i}getTranslation(a){return this.http.get(`${this.prefix}${a}${this.suffix}`)}};function j5(c){return new D2(c,"./assets/i18n/",".json")}var E6=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e1({type:a,bootstrap:[O1]}),a.\u0275inj=a1({providers:[c4()],imports:[o4.forRoot({loader:{provide:h1,useFactory:j5,deps:[X3]}}),Q3,K3,D6,L6]});let c=a;return c})();var U5=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e1({type:a,bootstrap:[O1]}),a.\u0275inj=a1({imports:[E6,a4]});let c=a;return c})();export{U5 as default};
