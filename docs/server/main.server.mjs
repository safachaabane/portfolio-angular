import './polyfills.server.mjs';
import{A as V3,B as v1,C as C3,D as k,E as u3,F as j1,G as d3,H as M1,I,J as U,K as o,L as m,M as V,N as L3,O as Z1,P as Y1,Q as g3,R as x3,S as b3,T as M,U as g,V as E,W as N3,X as y2,Y as S3,Z as u,_ as d,a as K,b as i1,c as g2,d as x2,e as b2,f as h3,fa as k3,g as H3,ga as w3,h as S1,ha as y3,i as N2,ia as A3,j as S2,ja as P3,k as q,ka as T3,l as Z,la as F3,m as k1,n as B,o as x,oa as D3,p as Y,q as k2,r as G1,s as W1,sa as B3,t as w1,u as p3,ua as $1,v as y1,va as X1,w as w2,wa as A2,x as M3,y as p,z as A}from"./chunk-GHPKTVEB.mjs";import{a as L2,f as z3}from"./chunk-VN5XZYCL.mjs";var n1=class{},O3=(()=>{class c extends n1{getTranslation(e){return K({})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=w1(c)))(r||c)}})();static \u0275prov=q({token:c,factory:c.\u0275fac})}return c})(),A1=class{},R3=(()=>{class c{handle(e){return e.key}static \u0275fac=function(i){return new(i||c)};static \u0275prov=q({token:c,factory:c.\u0275fac})}return c})();function K1(c,a){if(c===a)return!0;if(c===null||a===null)return!1;if(c!==c&&a!==a)return!0;let e=typeof c,i=typeof a,r,n,s;if(e==i&&e=="object")if(Array.isArray(c)){if(!Array.isArray(a))return!1;if((r=c.length)==a.length){for(n=0;n<r;n++)if(!K1(c[n],a[n]))return!1;return!0}}else{if(Array.isArray(a))return!1;s=Object.create(null);for(n in c){if(!K1(c[n],a[n]))return!1;s[n]=!0}for(n in a)if(!(n in s)&&typeof a[n]<"u")return!1;return!0}return!1}function r1(c){return typeof c<"u"&&c!==null}function P2(c){return c&&typeof c=="object"&&!Array.isArray(c)}function _3(c,a){let e=Object.assign({},c);return P2(c)&&P2(a)&&Object.keys(a).forEach(i=>{P2(a[i])?i in c?e[i]=_3(c[i],a[i]):Object.assign(e,{[i]:a[i]}):Object.assign(e,{[i]:a[i]})}),e}var V1=class{},q3=(()=>{class c extends V1{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,i){let r;return typeof e=="string"?r=this.interpolateString(e,i):typeof e=="function"?r=this.interpolateFunction(e,i):r=e,r}getValue(e,i){let r=typeof i=="string"?i.split("."):[i];i="";do i+=r.shift(),r1(e)&&r1(e[i])&&(typeof e[i]=="object"||!r.length)?(e=e[i],i=""):r.length?i+=".":e=void 0;while(r.length);return e}interpolateFunction(e,i){return e(i)}interpolateString(e,i){return i?e.replace(this.templateMatcher,(r,n)=>{let s=this.getValue(i,n);return r1(s)?s:r}):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=w1(c)))(r||c)}})();static \u0275prov=q({token:c,factory:c.\u0275fac})}return c})(),C1=class{},E3=(()=>{class c extends C1{compile(e,i){return e}compileTranslations(e,i){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=w1(c)))(r||c)}})();static \u0275prov=q({token:c,factory:c.\u0275fac})}return c})(),Q1=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new v1;onLangChange=new v1;onDefaultLangChange=new v1},T2=new k1("USE_STORE"),F2=new k1("USE_DEFAULT_LANG"),D2=new k1("DEFAULT_LANGUAGE"),B2=new k1("USE_EXTEND"),P1=(()=>{class c{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new v1;_onLangChange=new v1;_onDefaultLangChange=new v1;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,i,r,n,s,l=!0,f=!1,v=!1,t){this.store=e,this.currentLoader=i,this.compiler=r,this.parser=n,this.missingTranslationHandler=s,this.useDefaultLang=l,this.isolate=f,this.extend=v,t&&this.setDefaultLang(t)}setDefaultLang(e){if(e===this.defaultLang)return;let i=this.retrieveTranslations(e);typeof i<"u"?(this.defaultLang==null&&(this.defaultLang=e),i.pipe(S1(1)).subscribe(r=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return K(this.translations[e]);let i=this.retrieveTranslations(e);return typeof i<"u"?(this.currentLang||(this.currentLang=e),i.pipe(S1(1)).subscribe(r=>{this.changeLang(e)}),i):(this.changeLang(e),K(this.translations[e]))}retrieveTranslations(e){let i;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),i=this._translationRequests[e]),i}getTranslation(e){this.pending=!0;let i=this.currentLoader.getTranslation(e).pipe(N2(1),S1(1));return this.loadingTranslations=i.pipe(g2(r=>this.compiler.compileTranslations(r,e)),N2(1),S1(1)),this.loadingTranslations.subscribe({next:r=>{this.translations[e]=this.extend&&this.translations[e]?L2(L2({},r),this.translations[e]):r,this.updateLangs(),this.pending=!1},error:r=>{this.pending=!1}}),i}setTranslation(e,i,r=!1){i=this.compiler.compileTranslations(i,e),(r||this.extend)&&this.translations[e]?this.translations[e]=_3(this.translations[e],i):this.translations[e]=i,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(i=>{this.langs.indexOf(i)===-1&&this.langs.push(i)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,i,r){let n;if(i instanceof Array){let s={},l=!1;for(let f of i)s[f]=this.getParsedResult(e,f,r),i1(s[f])&&(l=!0);if(l){let f=i.map(v=>i1(s[v])?s[v]:K(s[v]));return h3(f).pipe(g2(v=>{let t={};return v.forEach((H,C)=>{t[i[C]]=H}),t}))}return s}if(e&&(n=this.parser.interpolate(this.parser.getValue(e,i),r)),typeof n>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(n=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],i),r)),typeof n>"u"){let s={key:i,translateService:this};typeof r<"u"&&(s.interpolateParams=r),n=this.missingTranslationHandler.handle(s)}return typeof n<"u"?n:i}get(e,i){if(!r1(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(H3(r=>(r=this.getParsedResult(r,e,i),i1(r)?r:K(r))));{let r=this.getParsedResult(this.translations[this.currentLang],e,i);return i1(r)?r:K(r)}}getStreamOnTranslationChange(e,i){if(!r1(e)||!e.length)throw new Error('Parameter "key" required');return x2(b2(()=>this.get(e,i)),this.onTranslationChange.pipe(S2(r=>{let n=this.getParsedResult(r.translations,e,i);return typeof n.subscribe=="function"?n:K(n)})))}stream(e,i){if(!r1(e)||!e.length)throw new Error('Parameter "key" required');return x2(b2(()=>this.get(e,i)),this.onLangChange.pipe(S2(r=>{let n=this.getParsedResult(r.translations,e,i);return i1(n)?n:K(n)})))}instant(e,i){if(!r1(e)||!e.length)throw new Error('Parameter "key" required');let r=this.getParsedResult(this.translations[this.currentLang],e,i);if(i1(r)){if(e instanceof Array){let n={};return e.forEach((s,l)=>{n[e[l]]=e[l]}),n}return e}else return r}set(e,i,r=this.currentLang){this.translations[r][e]=this.compiler.compile(i,r),this.updateLangs(),this.onTranslationChange.emit({lang:r,translations:this.translations[r]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(i){return new(i||c)(B(Q1),B(n1),B(C1),B(V1),B(A1),B(F2),B(T2),B(B2),B(D2))};static \u0275prov=q({token:c,factory:c.\u0275fac})}return c})();var $=(()=>{class c{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,i){this.translate=e,this._ref=i}updateValue(e,i,r){let n=s=>{this.value=s!==void 0?s:e,this.lastKey=e,this._ref.markForCheck()};if(r){let s=this.translate.getParsedResult(r,e,i);i1(s.subscribe)?s.subscribe(n):n(s)}this.translate.get(e,i).subscribe(n)}transform(e,...i){if(!e||!e.length)return e;if(K1(e,this.lastKey)&&K1(i,this.lastParams))return this.value;let r;if(r1(i[0])&&i.length)if(typeof i[0]=="string"&&i[0].length){let n=i[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{r=JSON.parse(n)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${i[0]}`)}}else typeof i[0]=="object"&&!Array.isArray(i[0])&&(r=i[0]);return this.lastKey=e,this.lastParams=i,this.updateValue(e,r),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(n=>{this.lastKey&&n.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,r,n.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(n=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r,n.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(i){return new(i||c)(A(P1,16),A(V3,16))};static \u0275pipe=G1({name:"translate",type:c,pure:!1});static \u0275prov=q({token:c,factory:c.\u0275fac})}return c})(),I3=(()=>{class c{static forRoot(e={}){return{ngModule:c,providers:[e.loader||{provide:n1,useClass:O3},e.compiler||{provide:C1,useClass:E3},e.parser||{provide:V1,useClass:q3},e.missingTranslationHandler||{provide:A1,useClass:R3},Q1,{provide:T2,useValue:e.isolate},{provide:F2,useValue:e.useDefaultLang},{provide:B2,useValue:e.extend},{provide:D2,useValue:e.defaultLanguage},P1]}}static forChild(e={}){return{ngModule:c,providers:[e.loader||{provide:n1,useClass:O3},e.compiler||{provide:C1,useClass:E3},e.parser||{provide:V1,useClass:q3},e.missingTranslationHandler||{provide:A1,useClass:R3},{provide:T2,useValue:e.isolate},{provide:F2,useValue:e.useDefaultLang},{provide:B2,useValue:e.extend},{provide:D2,useValue:e.defaultLanguage},P1]}}static \u0275fac=function(i){return new(i||c)};static \u0275mod=Y({type:c});static \u0275inj=Z({})}return c})();var J1=(()=>{let a=class a{constructor(i,r){this.translateService=i,this.router=r}detect(i){this.translateService.setDefaultLang(i),this.translateService.use(i),this.router.navigate([i])}notDetect(){this.translateService.setDefaultLang("en"),this.translateService.use("en"),this.router.navigate(["en"])}};a.\u0275fac=function(r){return new(r||a)(B(P1),B($1))},a.\u0275prov=q({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var G3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-loading"]],decls:13,vars:0,consts:[[1,"loading","position-relative","vh-100"],[1,"loader"],[1,"track"],[1,"mouse"],[1,"face"],[1,"ears-container"],[1,"eyes-container"],[1,"eye"],[1,"phiz"],[1,"nose"],[1,"lip"],[1,"mouth"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),V(3,"div",3),m(),o(4,"div",4),V(5,"div",5),o(6,"div",6),V(7,"div",7)(8,"div",7),m(),o(9,"div",8),V(10,"div",9)(11,"div",10)(12,"div",11),m()()()())},styles:['@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-moz-keyframes rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-o-keyframes rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-webkit-keyframes _ngcontent-%COMP%_hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@-moz-keyframes hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@-o-keyframes hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@keyframes _ngcontent-%COMP%_hideEye{0%,10%,85%{margin-top:0;height:50px}30%,65%{margin-top:20px;height:30px}}@-webkit-keyframes _ngcontent-%COMP%_blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-moz-keyframes blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@-o-keyframes blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}@keyframes _ngcontent-%COMP%_blink{0%,10%,85%{bottom:0}30%,65%{bottom:20px}0%{transform:rotate(-.08turn)}to{transform:rotate(-1.08turn)}}.loading[_ngcontent-%COMP%]{margin:0;background:#ffffff;overflow:hidden}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:260px;height:260px;margin-left:-130px;margin-top:-130px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{width:100%;height:100%;border:solid #f1c73a;border-width:5px 5px 3px 0;border-top-color:transparent;border-radius:50%;margin-left:-3px;margin-top:-3px;-webkit-animation:_ngcontent-%COMP%_rotate 3s infinite linear;-moz-animation:rotate 3s infinite linear;-o-animation:rotate 3s infinite linear;animation:_ngcontent-%COMP%_rotate 3s infinite linear}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]{position:absolute;right:31px;top:18px;width:25px;height:25px;background:#f1c73a;border-radius:80% 0 55% 50%/55% 0 80% 50%;transform:rotate(-95deg)}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:after{position:absolute;content:"";width:9px;height:9px;border-radius:50%;background:inherit}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:before{left:5px;top:-4px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]:after{left:20px;top:11px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:130px;height:130px;margin-left:-65px;margin-top:-65px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:after{position:absolute;content:"";width:50%;height:100%}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:before{background:#FBDA69;border-top-left-radius:65px;border-bottom-left-radius:55px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]:after{left:50%;background:#fde9a5;border-top-right-radius:65px;border-bottom-right-radius:55px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]{position:absolute;top:-8px;width:130px;height:50px}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:after{position:absolute;content:"";width:0;height:0;border-top:35px solid transparent;border-bottom:35px solid transparent}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:before{border-left:35px solid #FBDA69}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .ears-container[_ngcontent-%COMP%]:after{right:0;border-right:35px solid #fde9a5}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]{position:absolute;overflow:hidden;left:50%;top:30px;width:106px;height:50px;margin-left:-53px;z-index:1;-webkit-animation:_ngcontent-%COMP%_hideEye 3s infinite linear;-moz-animation:hideEye 3s infinite linear;-o-animation:hideEye 3s infinite linear;animation:_ngcontent-%COMP%_hideEye 3s infinite linear}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]{position:relative;bottom:0;float:left;width:50px;height:50px;border-radius:50%;color:#fbda69;background:#ffffff;-webkit-animation:_ngcontent-%COMP%_blink 3s infinite linear;-moz-animation:blink 3s infinite linear;-o-animation:blink 3s infinite linear;animation:_ngcontent-%COMP%_blink 3s infinite linear}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after{position:absolute;content:"";top:4px;right:14px;width:12px;height:12px;border-radius:inherit;background:#c9ae54}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .eyes-container[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:last-child{float:right;color:#fde9a5}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]{position:absolute;left:50%;top:66px;width:32px;height:48px;margin-left:-16px;z-index:1}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%]{width:100%;height:15px;border-radius:5px 5px 25px 25px;background:#c9ae54}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .lip[_ngcontent-%COMP%]{position:relative;left:50%;width:4px;height:12px;margin-left:-2px;background:#c9ae54}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .lip[_ngcontent-%COMP%]:before{position:absolute;content:"";width:100%;height:5px;background:#c3a541}.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .phiz[_ngcontent-%COMP%]   .mouth[_ngcontent-%COMP%]{position:relative;left:50%;width:20px;height:6px;margin-left:-13px;background:#c9ae54;border:3px solid #c9ae54;border-bottom-right-radius:12px;border-bottom-left-radius:12px}']});let c=a;return c})();function h6(c,a){c&1&&V(0,"app-loading")}function H6(c,a){c&1&&V(0,"router-outlet")}var d1=(()=>{let a=class a{constructor(i){this.translateDetectService=i,this.title="safa chaabane",this.loading=!0}ngOnInit(){let i=typeof localStorage<"u"?localStorage.getItem("lang"):null;if(i)setTimeout(()=>{this.translateDetectService.detect(i),this.loading=!1},1e3);else if(typeof navigator<"u"){let n=(navigator.language||"en").split("-")[0];["en","fr","de"].includes(n)?setTimeout(()=>{this.translateDetectService.detect(n),this.loading=!1,localStorage.setItem("lang",n)},1e3):setTimeout(()=>{this.translateDetectService.notDetect(),localStorage.setItem("lang","en"),this.loading=!1},1e3)}}};a.\u0275fac=function(r){return new(r||a)(A(J1))},a.\u0275cmp=x({type:a,selectors:[["app-root"]],decls:2,vars:1,template:function(r,n){r&1&&j1(0,h6,1,0,"app-loading")(1,H6,1,0),r&2&&d3(0,n.loading?0:1)},dependencies:[B3,G3]});let c=a;return c})();var R2=(c,a)=>{let e=c.params.lang;return/^(en|fr|de)$/.test(e)};var p6=(c,a)=>a.id;function M6(c,a){if(c&1&&(o(0,"li",9)(1,"a",10),M(2),m()()),c&2){let e=a.$implicit;p(1),k("routerLink",".")("fragment",e.link),p(1),g(e.link)}}function V6(c,a){c&1&&V(0,"span")}var W3=(()=>{let a=class a{constructor(i,r){this.translateDetectService=i,this.router=r,this.url=""}ngOnInit(){this.url=localStorage.getItem("lang")||""}onChange(i){return z3(this,null,function*(){localStorage.clear(),localStorage.setItem("lang",i),this.translateDetectService.detect(i)})}};a.\u0275fac=function(r){return new(r||a)(A(J1),A($1))},a.\u0275cmp=x({type:a,selectors:[["app-nav-bar"]],decls:15,vars:3,consts:[[1,"sticky-top","nav-bar","d-flex","justify-content-around","align-items-center","p-2"],["routerLink","/",1,"nav-bar-logo"],["src","../../../assets/log-safa-chaabane.png","alt","logo safa chaabane",1,"h-100","w-100"],[1,"d-lg-flex","m-0","d-none","justify-content-around","list-unstyled","nav-bar-menu","align-items-center"],[1,"m-0","d-flex","justify-content-around","nav-bar-lang","align-items-center"],[3,"click"],["src","../../../assets/en.jpg","alt","EN"],["src","../../../assets/fr.jpg","alt","FR"],["src","../../../assets/de.jpg","alt","DE"],[1,"px-3"],[3,"routerLink","fragment"],["class","px-3"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1),V(2,"img",2),m(),o(3,"ul",3),I(4,M6,3,3,"li",11,p6,!1,V6,1,0),u(7,"translate"),m(),o(8,"ul",4)(9,"li",5),Z1("click",function(){return n.onChange("en")}),V(10,"img",6),m(),o(11,"li",5),Z1("click",function(){return n.onChange("fr")}),V(12,"img",7),m(),o(13,"li",5),Z1("click",function(){return n.onChange("de")}),V(14,"img",8),m()()()),r&2&&(p(4),U(d(7,1,"menu")))},dependencies:[X1,$],styles:[".nav-bar[_ngcontent-%COMP%]{background-color:#fff}.nav-bar-logo[_ngcontent-%COMP%]{height:60px;cursor:pointer}@media screen and (max-width: 992px){.nav-bar-logo[_ngcontent-%COMP%]{height:40px}}.nav-bar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:auto 3%}.nav-bar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none;font-size:13px;font-weight:500}.nav-bar-lang[_ngcontent-%COMP%]{max-width:100px}.nav-bar-lang[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;cursor:pointer}.nav-bar-lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;margin:7px}"]});let c=a;return c})();var j3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-header"]],decls:1,vars:0,template:function(r,n){r&1&&V(0,"app-nav-bar")},dependencies:[W3]});let c=a;return c})();function L6(c,a){if(c&1&&(o(0,"div",11)(1,"div",12),V(2,"img",13),o(3,"p",14),M(4),u(5,"uppercase"),m()()()),c&2){let e=a.$implicit;p(2),b3("src","../../assets/icons/skills/",e,".png",y1),p(2),g(d(5,2,e))}}function g6(c,a){if(c&1&&(o(0,"div",8)(1,"p",9),M(2),m(),o(3,"div",10),I(4,L6,6,4,"div",15,M1),m()()),c&2){let e=a.$implicit;p(2),g(e.title),p(2),U(e.list)}}function x6(c,a){c&1&&(o(0,"span"),M(1,"Please wait"),m())}var Z3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-skills"]],decls:21,vars:12,consts:[[1,"skills"],[1,"skills-block","row","m-auto"],[1,"row"],[1,"col","position-relative"],[1,"skills-note","position-absolute"],[1,"skills-title","py-3"],[1,"col-lg-6","position-relative"],["src","../../../assets/skills.jpg","alt","skills",1,"skills-imgblock","h-auto","w-100"],["key","$index",1,"row"],[1,"skills-item-title","mb-1","mt-3"],[1,"row","flex-wrap","justify-content-start"],[1,"col","position-relative","skills-col-2","m-2"],[1,"skills-item"],["alt","",1,"skills-item-img","m-auto","d-block",3,"src"],[1,"text-center","skills-item-name"],["class","col position-relative skills-col-2 m-2"],["class","row","key","$index"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),M(5),u(6,"translate"),m(),o(7,"h2",5),M(8),u(9,"translate"),m(),o(10,"p"),M(11),u(12,"translate"),m()()(),o(13,"div",6),V(14,"img",7),m(),o(15,"div",6)(16,"div",2),I(17,g6,6,1,"div",16,M1,!1,x6,2,0),u(20,"translate"),m()()()()),r&2&&(p(5),g(d(6,4,"skills.note")),p(3),g(d(9,6,"skills.title")),p(3),g(d(12,8,"skills.desc")),p(6),U(d(20,10,"skills.listSkills")))},dependencies:[$,w3],styles:[".skills[_ngcontent-%COMP%]{min-height:95vh;padding-top:3%;padding-bottom:3%}.skills-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.skills-imgblock[_ngcontent-%COMP%]{max-width:600px}.skills-note[_ngcontent-%COMP%]{top:0;left:-20px;transform:rotate(-30deg);color:#25568c}.skills-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.skills-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:600}}.skills-col-2[_ngcontent-%COMP%]{max-width:70px}.skills-item[_ngcontent-%COMP%]{background-color:#fde9a5;border-radius:5px;height:100%;width:70px;padding:5px}.skills-item[_ngcontent-%COMP%]:hover{background-color:#f1c73a}.skills-item-title[_ngcontent-%COMP%]{color:#25568c;font-weight:600;font-size:18px}.skills-item-img[_ngcontent-%COMP%]{width:100%;height:100%;max-width:40px;max-height:40px}.skills-item-name[_ngcontent-%COMP%]{font-size:11px;padding-top:4px}"]});let c=a;return c})();var c2={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]};var Y3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var $3={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};var X3={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]};var K3={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};var Q3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var J3={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var c4={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};function a4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);a&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,i)}return e}function z(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?a4(Object(e),!0).forEach(function(i){w(c,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):a4(Object(e)).forEach(function(i){Object.defineProperty(c,i,Object.getOwnPropertyDescriptor(e,i))})}return c}function v2(c){"@babel/helpers - typeof";return v2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v2(c)}function N6(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function e4(c,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function S6(c,a,e){return a&&e4(c.prototype,a),e&&e4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function w(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function c3(c,a){return w6(c)||A6(c,a)||S4(c,a)||T6()}function _1(c){return k6(c)||y6(c)||S4(c)||P6()}function k6(c){if(Array.isArray(c))return U2(c)}function w6(c){if(Array.isArray(c))return c}function y6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function A6(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var i=[],r=!0,n=!1,s,l;try{for(e=e.call(c);!(r=(s=e.next()).done)&&(i.push(s.value),!(a&&i.length===a));r=!0);}catch(f){n=!0,l=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(n)throw l}}return i}}function S4(c,a){if(c){if(typeof c=="string")return U2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return U2(c,a)}}function U2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,i=new Array(a);e<a;e++)i[e]=c[e];return i}function P6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i4=function(){},a3={},k4={},w4=null,y4={mark:i4,measure:i4};try{typeof window<"u"&&(a3=window),typeof document<"u"&&(k4=document),typeof MutationObserver<"u"&&(w4=MutationObserver),typeof performance<"u"&&(y4=performance)}catch{}var F6=a3.navigator||{},r4=F6.userAgent,n4=r4===void 0?"":r4,l1=a3,N=k4,s4=w4,a2=y4,K0=!!l1.document,a1=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",A4=~n4.indexOf("MSIE")||~n4.indexOf("Trident/"),e2,i2,r2,n2,s2,Q="___FONT_AWESOME___",G2=16,P4="fa",T4="svg-inline--fa",H1="data-fa-i2svg",W2="data-fa-pseudo-element",D6="data-fa-pseudo-element-pending",e3="data-prefix",i3="data-icon",l4="fontawesome-i2svg",B6="async",O6=["HTML","HEAD","STYLE","SCRIPT"],F4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),b="classic",S="sharp",r3=[b,S];function I1(c){return new Proxy(c,{get:function(e,i){return i in e?e[i]:e[b]}})}var B1=I1((e2={},w(e2,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(e2,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),e2)),O1=I1((i2={},w(i2,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(i2,S,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),i2)),R1=I1((r2={},w(r2,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(r2,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),r2)),R6=I1((n2={},w(n2,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(n2,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),n2)),q6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,D4="fa-layers-text",E6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_6=I1((s2={},w(s2,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(s2,S,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),s2)),B4=[1,2,3,4,5,6,7,8,9,10],I6=B4.concat([11,12,13,14,15,16,17,18,19,20]),U6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],z1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q1=new Set;Object.keys(O1[b]).map(q1.add.bind(q1));Object.keys(O1[S]).map(q1.add.bind(q1));var G6=[].concat(r3,_1(q1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",z1.GROUP,z1.SWAP_OPACITY,z1.PRIMARY,z1.SECONDARY]).concat(B4.map(function(c){return"".concat(c,"x")})).concat(I6.map(function(c){return"w-".concat(c)})),F1=l1.FontAwesomeConfig||{};function W6(c){var a=N.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function j6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}N&&typeof N.querySelector=="function"&&(f4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],f4.forEach(function(c){var a=c3(c,2),e=a[0],i=a[1],r=j6(W6(e));r!=null&&(F1[i]=r)}));var f4,O4={styleDefault:"solid",familyDefault:"classic",cssPrefix:P4,replacementClass:T4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};F1.familyPrefix&&(F1.cssPrefix=F1.familyPrefix);var b1=z(z({},O4),F1);b1.autoReplaceSvg||(b1.observeMutations=!1);var h={};Object.keys(O4).forEach(function(c){Object.defineProperty(h,c,{enumerable:!0,set:function(e){b1[c]=e,D1.forEach(function(i){return i(h)})},get:function(){return b1[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(a){b1.cssPrefix=a,D1.forEach(function(e){return e(h)})},get:function(){return b1.cssPrefix}});l1.FontAwesomeConfig=h;var D1=[];function Z6(c){return D1.push(c),function(){D1.splice(D1.indexOf(c),1)}}var s1=G2,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Y6(c){if(!(!c||!a1)){var a=N.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=N.head.childNodes,i=null,r=e.length-1;r>-1;r--){var n=e[r],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=n)}return N.head.insertBefore(a,i),c}}var $6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E1(){for(var c=12,a="";c-- >0;)a+=$6[Math.random()*62|0];return a}function N1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function n3(c){return c.classList?N1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function R4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X6(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(R4(c[e]),'" ')},"").trim()}function H2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function s3(c){return c.size!==X.size||c.x!==X.x||c.y!==X.y||c.rotate!==X.rotate||c.flipX||c.flipY}function K6(c){var a=c.transform,e=c.containerWidth,i=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(n," ").concat(s," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:f,path:v}}function Q6(c){var a=c.transform,e=c.width,i=e===void 0?G2:e,r=c.height,n=r===void 0?G2:r,s=c.startCentered,l=s===void 0?!1:s,f="";return l&&A4?f+="translate(".concat(a.x/s1-i/2,"em, ").concat(a.y/s1-n/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/s1,"em), calc(-50% + ").concat(a.y/s1,"em)) "):f+="translate(".concat(a.x/s1,"em, ").concat(a.y/s1,"em) "),f+="scale(".concat(a.size/s1*(a.flipX?-1:1),", ").concat(a.size/s1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var J6=`:root, :host {
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
}`;function q4(){var c=P4,a=T4,e=h.cssPrefix,i=h.replacementClass,r=J6;if(e!==c||i!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");r=r.replace(n,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(l,".".concat(i))}return r}var o4=!1;function q2(){h.autoAddCss&&!o4&&(Y6(q4()),o4=!0)}var c8={mixout:function(){return{dom:{css:q4,insertCss:q2}}},hooks:function(){return{beforeDOMElementCreation:function(){q2()},beforeI2svg:function(){q2()}}}},J=l1||{};J[Q]||(J[Q]={});J[Q].styles||(J[Q].styles={});J[Q].hooks||(J[Q].hooks={});J[Q].shims||(J[Q].shims=[]);var G=J[Q],E4=[],a8=function c(){N.removeEventListener("DOMContentLoaded",c),z2=1,E4.map(function(a){return a()})},z2=!1;a1&&(z2=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),z2||N.addEventListener("DOMContentLoaded",a8));function e8(c){a1&&(z2?setTimeout(c,0):E4.push(c))}function U1(c){var a=c.tag,e=c.attributes,i=e===void 0?{}:e,r=c.children,n=r===void 0?[]:r;return typeof c=="string"?R4(c):"<".concat(a," ").concat(X6(i),">").concat(n.map(U1).join(""),"</").concat(a,">")}function t4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var i8=function(a,e){return function(i,r,n,s){return a.call(e,i,r,n,s)}},E2=function(a,e,i,r){var n=Object.keys(a),s=n.length,l=r!==void 0?i8(e,r):e,f,v,t;for(i===void 0?(f=1,t=a[n[0]]):(f=0,t=i);f<s;f++)v=n[f],t=l(t,a[v],v,a);return t};function r8(c){for(var a=[],e=0,i=c.length;e<i;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<i){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((r&1023)<<10)+(n&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function j2(c){var a=r8(c);return a.length===1?a[0].toString(16):null}function n8(c,a){var e=c.length,i=c.charCodeAt(a),r;return i>=55296&&i<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function m4(c){return Object.keys(c).reduce(function(a,e){var i=c[e],r=!!i.icon;return r?a[i.iconName]=i.icon:a[e]=i,a},{})}function Z2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e.skipHooks,r=i===void 0?!1:i,n=m4(a);typeof G.hooks.addPack=="function"&&!r?G.hooks.addPack(c,m4(a)):G.styles[c]=z(z({},G.styles[c]||{}),n),c==="fas"&&Z2("fa",a)}var l2,f2,o2,L1=G.styles,s8=G.shims,l8=(l2={},w(l2,b,Object.values(R1[b])),w(l2,S,Object.values(R1[S])),l2),l3=null,_4={},I4={},U4={},G4={},W4={},f8=(f2={},w(f2,b,Object.keys(B1[b])),w(f2,S,Object.keys(B1[S])),f2);function o8(c){return~G6.indexOf(c)}function t8(c,a){var e=a.split("-"),i=e[0],r=e.slice(1).join("-");return i===c&&r!==""&&!o8(r)?r:null}var j4=function(){var a=function(n){return E2(L1,function(s,l,f){return s[f]=E2(l,n,{}),s},{})};_4=a(function(r,n,s){if(n[3]&&(r[n[3]]=s),n[2]){var l=n[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=s})}return r}),I4=a(function(r,n,s){if(r[s]=s,n[2]){var l=n[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=s})}return r}),W4=a(function(r,n,s){var l=n[2];return r[s]=s,l.forEach(function(f){r[f]=s}),r});var e="far"in L1||h.autoFetchSvg,i=E2(s8,function(r,n){var s=n[0],l=n[1],f=n[2];return l==="far"&&!e&&(l="fas"),typeof s=="string"&&(r.names[s]={prefix:l,iconName:f}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});U4=i.names,G4=i.unicodes,l3=p2(h.styleDefault,{family:h.familyDefault})};Z6(function(c){l3=p2(c.styleDefault,{family:h.familyDefault})});j4();function f3(c,a){return(_4[c]||{})[a]}function m8(c,a){return(I4[c]||{})[a]}function h1(c,a){return(W4[c]||{})[a]}function Z4(c){return U4[c]||{prefix:null,iconName:null}}function v8(c){var a=G4[c],e=f3("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function f1(){return l3}var o3=function(){return{prefix:null,iconName:null,rest:[]}};function p2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,i=e===void 0?b:e,r=B1[i][c],n=O1[i][c]||O1[i][r],s=c in G.styles?c:null;return n||s||null}var v4=(o2={},w(o2,b,Object.keys(R1[b])),w(o2,S,Object.keys(R1[S])),o2);function M2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,r=i===void 0?!1:i,n=(a={},w(a,b,"".concat(h.cssPrefix,"-").concat(b)),w(a,S,"".concat(h.cssPrefix,"-").concat(S)),a),s=null,l=b;(c.includes(n[b])||c.some(function(v){return v4[b].includes(v)}))&&(l=b),(c.includes(n[S])||c.some(function(v){return v4[S].includes(v)}))&&(l=S);var f=c.reduce(function(v,t){var H=t8(h.cssPrefix,t);if(L1[t]?(t=l8[l].includes(t)?R6[l][t]:t,s=t,v.prefix=t):f8[l].indexOf(t)>-1?(s=t,v.prefix=p2(t,{family:l})):H?v.iconName=H:t!==h.replacementClass&&t!==n[b]&&t!==n[S]&&v.rest.push(t),!r&&v.prefix&&v.iconName){var C=s==="fa"?Z4(v.iconName):{},L=h1(v.prefix,v.iconName);C.prefix&&(s=null),v.iconName=C.iconName||L||v.iconName,v.prefix=C.prefix||v.prefix,v.prefix==="far"&&!L1.far&&L1.fas&&!h.autoFetchSvg&&(v.prefix="fas")}return v},o3());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===S&&(L1.fass||h.autoFetchSvg)&&(f.prefix="fass",f.iconName=h1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||s==="fa")&&(f.prefix=f1()||"fas"),f}var z8=function(){function c(){N6(this,c),this.definitions={}}return S6(c,[{key:"add",value:function(){for(var e=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){e.definitions[l]=z(z({},e.definitions[l]||{}),s[l]),Z2(l,s[l]);var f=R1[b][l];f&&Z2(f,s[l]),j4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(n){var s=r[n],l=s.prefix,f=s.iconName,v=s.icon,t=v[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(H){typeof H=="string"&&(e[l][H]=v)}),e[l][f]=v}),e}}]),c}(),z4=[],g1={},x1={},h8=Object.keys(x1);function H8(c,a){var e=a.mixoutsTo;return z4=c,g1={},Object.keys(x1).forEach(function(i){h8.indexOf(i)===-1&&delete x1[i]}),z4.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(e[s]=r[s]),v2(r[s])==="object"&&Object.keys(r[s]).forEach(function(l){e[s]||(e[s]={}),e[s][l]=r[s][l]})}),i.hooks){var n=i.hooks();Object.keys(n).forEach(function(s){g1[s]||(g1[s]=[]),g1[s].push(n[s])})}i.provides&&i.provides(x1)}),e}function Y2(c,a){for(var e=arguments.length,i=new Array(e>2?e-2:0),r=2;r<e;r++)i[r-2]=arguments[r];var n=g1[c]||[];return n.forEach(function(s){a=s.apply(null,[a].concat(i))}),a}function p1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),i=1;i<a;i++)e[i-1]=arguments[i];var r=g1[c]||[];r.forEach(function(n){n.apply(null,e)})}function c1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return x1[c]?x1[c].apply(null,a):void 0}function $2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||f1();if(a)return a=h1(e,a)||a,t4(Y4.definitions,e,a)||t4(G.styles,e,a)}var Y4=new z8,p8=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,p1("noAuto")},M8={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a1?(p1("beforeI2svg",a),c1("pseudoElements2svg",a),c1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,e8(function(){C8({autoReplaceSvgRoot:e}),p1("watch",a)})}},V8={icon:function(a){if(a===null)return null;if(v2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:h1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],i=p2(a[0]);return{prefix:i,iconName:h1(i,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(h.cssPrefix,"-"))>-1||a.match(q6))){var r=M2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||f1(),iconName:h1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var n=f1();return{prefix:n,iconName:h1(n,a)||a}}}},O={noAuto:p8,config:h,dom:M8,parse:V8,library:Y4,findIconDefinition:$2,toHtml:U1},C8=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,i=e===void 0?N:e;(Object.keys(G.styles).length>0||h.autoFetchSvg)&&a1&&h.autoReplaceSvg&&O.dom.i2svg({node:i})};function V2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(i){return U1(i)})}}),Object.defineProperty(c,"node",{get:function(){if(a1){var i=N.createElement("div");return i.innerHTML=c.html,i.children}}}),c}function u8(c){var a=c.children,e=c.main,i=c.mask,r=c.attributes,n=c.styles,s=c.transform;if(s3(s)&&e.found&&!i.found){var l=e.width,f=e.height,v={x:l/f/2,y:.5};r.style=H2(z(z({},n),{},{"transform-origin":"".concat(v.x+s.x/16,"em ").concat(v.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function d8(c){var a=c.prefix,e=c.iconName,i=c.children,r=c.attributes,n=c.symbol,s=n===!0?"".concat(a,"-").concat(h.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},r),{},{id:s}),children:i}]}]}function t3(c){var a=c.icons,e=a.main,i=a.mask,r=c.prefix,n=c.iconName,s=c.transform,l=c.symbol,f=c.title,v=c.maskId,t=c.titleId,H=c.extra,C=c.watchable,L=C===void 0?!1:C,T=i.found?i:e,R=T.width,_=T.height,W=r==="fak",y=[h.replacementClass,n?"".concat(h.cssPrefix,"-").concat(n):""].filter(function(e1){return H.classes.indexOf(e1)===-1}).filter(function(e1){return e1!==""||!!e1}).concat(H.classes).join(" "),F={children:[],attributes:z(z({},H.attributes),{},{"data-prefix":r,"data-icon":n,class:y,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(_)})},j=W&&!~H.classes.indexOf("fa-fw")?{width:"".concat(R/_*16*.0625,"em")}:{};L&&(F.attributes[H1]=""),f&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(t||E1())},children:[f]}),delete F.attributes.title);var D=z(z({},F),{},{prefix:r,iconName:n,main:e,mask:i,maskId:v,transform:s,symbol:l,styles:z(z({},j),H.styles)}),t1=i.found&&e.found?c1("generateAbstractMask",D)||{children:[],attributes:{}}:c1("generateAbstractIcon",D)||{children:[],attributes:{}},m1=t1.children,d2=t1.attributes;return D.children=m1,D.attributes=d2,l?d8(D):u8(D)}function h4(c){var a=c.content,e=c.width,i=c.height,r=c.transform,n=c.title,s=c.extra,l=c.watchable,f=l===void 0?!1:l,v=z(z(z({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});f&&(v[H1]="");var t=z({},s.styles);s3(r)&&(t.transform=Q6({transform:r,startCentered:!0,width:e,height:i}),t["-webkit-transform"]=t.transform);var H=H2(t);H.length>0&&(v.style=H);var C=[];return C.push({tag:"span",attributes:v,children:[a]}),n&&C.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),C}function L8(c){var a=c.content,e=c.title,i=c.extra,r=z(z(z({},i.attributes),e?{title:e}:{}),{},{class:i.classes.join(" ")}),n=H2(i.styles);n.length>0&&(r.style=n);var s=[];return s.push({tag:"span",attributes:r,children:[a]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var _2=G.styles;function X2(c){var a=c[0],e=c[1],i=c.slice(4),r=c3(i,1),n=r[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(z1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(z1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(z1.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:s}}var g8={found:!1,width:512,height:512};function x8(c,a){!F4&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function K2(c,a){var e=a;return a==="fa"&&h.styleDefault!==null&&(a=f1()),new Promise(function(i,r){var n={found:!1,width:512,height:512,icon:c1("missingIconAbstract")||{}};if(e==="fa"){var s=Z4(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&_2[a]&&_2[a][c]){var l=_2[a][c];return i(X2(l))}x8(c,a),i(z(z({},g8),{},{icon:h.showMissingIcons&&c?c1("missingIconAbstract")||{}:{}}))})}var H4=function(){},Q2=h.measurePerformance&&a2&&a2.mark&&a2.measure?a2:{mark:H4,measure:H4},T1='FA "6.5.1"',b8=function(a){return Q2.mark("".concat(T1," ").concat(a," begins")),function(){return $4(a)}},$4=function(a){Q2.mark("".concat(T1," ").concat(a," ends")),Q2.measure("".concat(T1," ").concat(a),"".concat(T1," ").concat(a," begins"),"".concat(T1," ").concat(a," ends"))},m3={begin:b8,end:$4},t2=function(){};function p4(c){var a=c.getAttribute?c.getAttribute(H1):null;return typeof a=="string"}function N8(c){var a=c.getAttribute?c.getAttribute(e3):null,e=c.getAttribute?c.getAttribute(i3):null;return a&&e}function S8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function k8(){if(h.autoReplaceSvg===!0)return m2.replace;var c=m2[h.autoReplaceSvg];return c||m2.replace}function w8(c){return N.createElementNS("http://www.w3.org/2000/svg",c)}function y8(c){return N.createElement(c)}function X4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,i=e===void 0?c.tag==="svg"?w8:y8:e;if(typeof c=="string")return N.createTextNode(c);var r=i(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){r.appendChild(X4(s,{ceFn:i}))}),r}function A8(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var m2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(X4(r),e)}),e.getAttribute(H1)===null&&h.keepOriginalSource){var i=N.createComment(A8(e));e.parentNode.replaceChild(i,e)}else e.remove()},nest:function(a){var e=a[0],i=a[1];if(~n3(e).indexOf(h.replacementClass))return m2.replace(a);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var n=i[0].attributes.class.split(" ").reduce(function(l,f){return f===h.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});i[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var s=i.map(function(l){return U1(l)}).join(`
`);e.setAttribute(H1,""),e.innerHTML=s}};function M4(c){c()}function K4(c,a){var e=typeof a=="function"?a:t2;if(c.length===0)e();else{var i=M4;h.mutateApproach===B6&&(i=l1.requestAnimationFrame||M4),i(function(){var r=k8(),n=m3.begin("mutate");c.map(r),n(),e()})}}var v3=!1;function Q4(){v3=!0}function J2(){v3=!1}var h2=null;function V4(c){if(s4&&h.observeMutations){var a=c.treeCallback,e=a===void 0?t2:a,i=c.nodeCallback,r=i===void 0?t2:i,n=c.pseudoElementsCallback,s=n===void 0?t2:n,l=c.observeMutationsRoot,f=l===void 0?N:l;h2=new s4(function(v){if(!v3){var t=f1();N1(v).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!p4(H.addedNodes[0])&&(h.searchPseudoElements&&s(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&h.searchPseudoElements&&s(H.target.parentNode),H.type==="attributes"&&p4(H.target)&&~U6.indexOf(H.attributeName))if(H.attributeName==="class"&&N8(H.target)){var C=M2(n3(H.target)),L=C.prefix,T=C.iconName;H.target.setAttribute(e3,L||t),T&&H.target.setAttribute(i3,T)}else S8(H.target)&&r(H.target)})}}),a1&&h2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function P8(){h2&&h2.disconnect()}function T8(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(i,r){var n=r.split(":"),s=n[0],l=n.slice(1);return s&&l.length>0&&(i[s]=l.join(":").trim()),i},{})),e}function F8(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),i=c.innerText!==void 0?c.innerText.trim():"",r=M2(n3(c));return r.prefix||(r.prefix=f1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=m8(r.prefix,c.innerText)||f3(r.prefix,j2(c.innerText))),!r.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function D8(c){var a=N1(c.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),e=c.getAttribute("title"),i=c.getAttribute("data-fa-title-id");return h.autoA11y&&(e?a["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(i||E1()):(a["aria-hidden"]="true",a.focusable="false")),a}function B8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function C4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=F8(c),i=e.iconName,r=e.prefix,n=e.rest,s=D8(c),l=Y2("parseNodeAttributes",{},c),f=a.styleParser?T8(c):[];return z({iconName:i,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:f,attributes:s}},l)}var O8=G.styles;function J4(c){var a=h.autoReplaceSvg==="nest"?C4(c,{styleParser:!1}):C4(c);return~a.extra.classes.indexOf(D4)?c1("generateLayersText",c,a):c1("generateSvgReplacementMutation",c,a)}var o1=new Set;r3.map(function(c){o1.add("fa-".concat(c))});Object.keys(B1[b]).map(o1.add.bind(o1));Object.keys(B1[S]).map(o1.add.bind(o1));o1=_1(o1);function u4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a1)return Promise.resolve();var e=N.documentElement.classList,i=function(H){return e.add("".concat(l4,"-").concat(H))},r=function(H){return e.remove("".concat(l4,"-").concat(H))},n=h.autoFetchSvg?o1:r3.map(function(t){return"fa-".concat(t)}).concat(Object.keys(O8));n.includes("fa")||n.push("fa");var s=[".".concat(D4,":not([").concat(H1,"])")].concat(n.map(function(t){return".".concat(t,":not([").concat(H1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=N1(c.querySelectorAll(s))}catch{}if(l.length>0)i("pending"),r("complete");else return Promise.resolve();var f=m3.begin("onTree"),v=l.reduce(function(t,H){try{var C=J4(H);C&&t.push(C)}catch(L){F4||L.name==="MissingIcon"&&console.error(L)}return t},[]);return new Promise(function(t,H){Promise.all(v).then(function(C){K4(C,function(){i("active"),i("complete"),r("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(C){f(),H(C)})})}function R8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;J4(c).then(function(e){e&&K4([e],a)})}function q8(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(a||{}).icon?a:$2(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:$2(r||{})),c(i,z(z({},e),{},{mask:r}))}}var E8=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,r=i===void 0?X:i,n=e.symbol,s=n===void 0?!1:n,l=e.mask,f=l===void 0?null:l,v=e.maskId,t=v===void 0?null:v,H=e.title,C=H===void 0?null:H,L=e.titleId,T=L===void 0?null:L,R=e.classes,_=R===void 0?[]:R,W=e.attributes,y=W===void 0?{}:W,F=e.styles,j=F===void 0?{}:F;if(a){var D=a.prefix,t1=a.iconName,m1=a.icon;return V2(z({type:"icon"},a),function(){return p1("beforeDOMElementCreation",{iconDefinition:a,params:e}),h.autoA11y&&(C?y["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(T||E1()):(y["aria-hidden"]="true",y.focusable="false")),t3({icons:{main:X2(m1),mask:f?X2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:t1,transform:z(z({},X),r),symbol:s,title:C,maskId:t,titleId:T,extra:{attributes:y,styles:j,classes:_}})})}},_8={mixout:function(){return{icon:q8(E8)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=u4,e.nodeCallback=R8,e}}},provides:function(a){a.i2svg=function(e){var i=e.node,r=i===void 0?N:i,n=e.callback,s=n===void 0?function(){}:n;return u4(r,s)},a.generateSvgReplacementMutation=function(e,i){var r=i.iconName,n=i.title,s=i.titleId,l=i.prefix,f=i.transform,v=i.symbol,t=i.mask,H=i.maskId,C=i.extra;return new Promise(function(L,T){Promise.all([K2(r,l),t.iconName?K2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var _=c3(R,2),W=_[0],y=_[1];L([e,t3({icons:{main:W,mask:y},prefix:l,iconName:r,transform:f,symbol:v,maskId:H,title:n,titleId:s,extra:C,watchable:!0})])}).catch(T)})},a.generateAbstractIcon=function(e){var i=e.children,r=e.attributes,n=e.main,s=e.transform,l=e.styles,f=H2(l);f.length>0&&(r.style=f);var v;return s3(s)&&(v=c1("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),i.push(v||n.icon),{children:i,attributes:r}}}},I8={mixout:function(){return{layer:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,n=r===void 0?[]:r;return V2({type:"layer"},function(){p1("beforeDOMElementCreation",{assembler:e,params:i});var s=[];return e(function(l){Array.isArray(l)?l.map(function(f){s=s.concat(f.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(_1(n)).join(" ")},children:s}]})}}}},U8={mixout:function(){return{counter:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,n=r===void 0?null:r,s=i.classes,l=s===void 0?[]:s,f=i.attributes,v=f===void 0?{}:f,t=i.styles,H=t===void 0?{}:t;return V2({type:"counter",content:e},function(){return p1("beforeDOMElementCreation",{content:e,params:i}),L8({content:e.toString(),title:n,extra:{attributes:v,styles:H,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(_1(l))}})})}}}},G8={mixout:function(){return{text:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,n=r===void 0?X:r,s=i.title,l=s===void 0?null:s,f=i.classes,v=f===void 0?[]:f,t=i.attributes,H=t===void 0?{}:t,C=i.styles,L=C===void 0?{}:C;return V2({type:"text",content:e},function(){return p1("beforeDOMElementCreation",{content:e,params:i}),h4({content:e,transform:z(z({},X),n),title:l,extra:{attributes:H,styles:L,classes:["".concat(h.cssPrefix,"-layers-text")].concat(_1(v))}})})}}},provides:function(a){a.generateLayersText=function(e,i){var r=i.title,n=i.transform,s=i.extra,l=null,f=null;if(A4){var v=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/v,f=t.height/v}return h.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,h4({content:e.innerHTML,width:l,height:f,transform:n,title:r,extra:s,watchable:!0})])}}},W8=new RegExp('"',"ug"),d4=[1105920,1112319];function j8(c){var a=c.replace(W8,""),e=n8(a,0),i=e>=d4[0]&&e<=d4[1],r=a.length===2?a[0]===a[1]:!1;return{value:j2(r?a[0]:a),isSecondary:i||r}}function L4(c,a){var e="".concat(D6).concat(a.replace(":","-"));return new Promise(function(i,r){if(c.getAttribute(e)!==null)return i();var n=N1(c.children),s=n.filter(function(m1){return m1.getAttribute(W2)===a})[0],l=l1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(E6),v=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(s&&!f)return c.removeChild(s),i();if(f&&t!=="none"&&t!==""){var H=l.getPropertyValue("content"),C=~["Sharp"].indexOf(f[2])?S:b,L=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?O1[C][f[2].toLowerCase()]:_6[C][v],T=j8(H),R=T.value,_=T.isSecondary,W=f[0].startsWith("FontAwesome"),y=f3(L,R),F=y;if(W){var j=v8(R);j.iconName&&j.prefix&&(y=j.iconName,L=j.prefix)}if(y&&!_&&(!s||s.getAttribute(e3)!==L||s.getAttribute(i3)!==F)){c.setAttribute(e,F),s&&c.removeChild(s);var D=B8(),t1=D.extra;t1.attributes[W2]=a,K2(y,L).then(function(m1){var d2=t3(z(z({},D),{},{icons:{main:m1,mask:o3()},prefix:L,iconName:F,extra:t1,watchable:!0})),e1=N.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(e1,c.firstChild):c.appendChild(e1),e1.outerHTML=d2.map(function(v6){return U1(v6)}).join(`
`),c.removeAttribute(e),i()}).catch(r)}else i()}else i()})}function Z8(c){return Promise.all([L4(c,"::before"),L4(c,"::after")])}function Y8(c){return c.parentNode!==document.head&&!~O6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(W2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function g4(c){if(a1)return new Promise(function(a,e){var i=N1(c.querySelectorAll("*")).filter(Y8).map(Z8),r=m3.begin("searchPseudoElements");Q4(),Promise.all(i).then(function(){r(),J2(),a()}).catch(function(){r(),J2(),e()})})}var $8={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=g4,e}}},provides:function(a){a.pseudoElements2svg=function(e){var i=e.node,r=i===void 0?N:i;h.searchPseudoElements&&g4(r)}}},x4=!1,X8={mixout:function(){return{dom:{unwatch:function(){Q4(),x4=!0}}}},hooks:function(){return{bootstrap:function(){V4(Y2("mutationObserverCallbacks",{}))},noAuto:function(){P8()},watch:function(e){var i=e.observeMutationsRoot;x4?J2():V4(Y2("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},b4=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(i,r){var n=r.toLowerCase().split("-"),s=n[0],l=n.slice(1).join("-");if(s&&l==="h")return i.flipX=!0,i;if(s&&l==="v")return i.flipY=!0,i;if(l=parseFloat(l),isNaN(l))return i;switch(s){case"grow":i.size=i.size+l;break;case"shrink":i.size=i.size-l;break;case"left":i.x=i.x-l;break;case"right":i.x=i.x+l;break;case"up":i.y=i.y-l;break;case"down":i.y=i.y+l;break;case"rotate":i.rotate=i.rotate+l;break}return i},e)},K8={mixout:function(){return{parse:{transform:function(e){return b4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,i){var r=i.getAttribute("data-fa-transform");return r&&(e.transform=b4(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var i=e.main,r=e.transform,n=e.containerWidth,s=e.iconWidth,l={transform:"translate(".concat(n/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),v="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),t="rotate(".concat(r.rotate," 0 0)"),H={transform:"".concat(f," ").concat(v," ").concat(t)},C={transform:"translate(".concat(s/2*-1," -256)")},L={outer:l,inner:H,path:C};return{tag:"g",attributes:z({},L.outer),children:[{tag:"g",attributes:z({},L.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:z(z({},i.icon.attributes),L.path)}]}]}}}},I2={x:0,y:0,width:"100%",height:"100%"};function N4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Q8(c){return c.tag==="g"?c.children:[c]}var J8={hooks:function(){return{parseNodeAttributes:function(e,i){var r=i.getAttribute("data-fa-mask"),n=r?M2(r.split(" ").map(function(s){return s.trim()})):o3();return n.prefix||(n.prefix=f1()),e.mask=n,e.maskId=i.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var i=e.children,r=e.attributes,n=e.main,s=e.mask,l=e.maskId,f=e.transform,v=n.width,t=n.icon,H=s.width,C=s.icon,L=K6({transform:f,containerWidth:H,iconWidth:v}),T={tag:"rect",attributes:z(z({},I2),{},{fill:"white"})},R=t.children?{children:t.children.map(N4)}:{},_={tag:"g",attributes:z({},L.inner),children:[N4(z({tag:t.tag,attributes:z(z({},t.attributes),L.path)},R))]},W={tag:"g",attributes:z({},L.outer),children:[_]},y="mask-".concat(l||E1()),F="clip-".concat(l||E1()),j={tag:"mask",attributes:z(z({},I2),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,W]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Q8(C)},j]};return i.push(D,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(y,")")},I2)}),{children:i,attributes:r}}}},c0={provides:function(a){var e=!1;l1.matchMedia&&(e=l1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=z(z({},n),{},{attributeName:"opacity"}),l={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:z(z({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(l),i.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||i.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},a0={hooks:function(){return{parseNodeAttributes:function(e,i){var r=i.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return e.symbol=n,e}}}},e0=[c8,_8,I8,U8,G8,$8,X8,K8,J8,c0,a0];H8(e0,{mixoutsTo:O});var Q0=O.noAuto,J0=O.config,c5=O.library,a5=O.dom,c6=O.parse,e5=O.findIconDefinition,i5=O.toHtml,a6=O.icon,r5=O.layer,i0=O.text,r0=O.counter;var n0=["*"],s0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},l0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},f0=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},o0=c=>c.prefix!==void 0&&c.iconName!==void 0,t0=(c,a)=>o0(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},m0=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=q({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),v0=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...i){for(let r of i){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...i){for(let r of i){let n=Object.keys(r).map(s=>r[s]);this.addIcons(...n)}}getIconDefinition(i,r){return i in this.definitions&&r in this.definitions[i]?this.definitions[i][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=q({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),z0=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=k2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[W1]});let c=a;return c})(),h0=(()=>{let a=class a{constructor(i,r){this.renderer=i,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(A(M3),A(w2))},a.\u0275cmp=x({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[W1,y2],ngContentSelectors:n0,decls:1,vars:0,template:function(r,n){r&1&&(g3(),x3(0))},encapsulation:2});let c=a;return c})(),C2=(()=>{let a=class a{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,r,n,s,l){this.sanitizer=i,this.config=r,this.iconLibrary=n,this.stackItem=s,this.classes=[],l!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){l0();return}if(i){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let r=t0(i,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(s0(r),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?c6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...f0(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,r){let n=a6(i,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(A(T3),A(m0),A(v0),A(z0,8),A(h0,8))},a.\u0275cmp=x({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(L3("innerHTML",n.renderedIconHTML,p3),C3("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[W1,y2],decls:0,vars:0,template:function(r,n){},encapsulation:2});let c=a;return c})();var e6=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=Y({type:a}),a.\u0275inj=Z({});let c=a;return c})();var H0=(c,a)=>a.id;function p0(c,a){if(c&1&&V(0,"fa-icon",17),c&2){let e=Y1(2);k("icon",e.faCode)}}function M0(c,a){if(c&1&&V(0,"fa-icon",17),c&2){let e=Y1(2);k("icon",e.faCircleExclamationCheck)}}function V0(c,a){if(c&1&&V(0,"fa-icon",17),c&2){let e=Y1(2);k("icon",e.faWandMagicSparkles)}}function C0(c,a){if(c&1&&(o(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14),j1(4,p0,1,1,"fa-icon",15)(5,M0,1,1,"fa-icon",15)(6,V0,1,1,"fa-icon",15),m(),o(7,"div")(8,"h2"),M(9),m()()(),o(10,"p",16),M(11),m()()()),c&2){let e=a.$implicit;p(4),k("ngIf",e.icon==="faCode"),p(1),k("ngIf",e.icon==="faCircleExclamationCheck"),p(1),k("ngIf",e.icon==="faWandMagicSparkles"),p(3),E(" ",e==null?null:e.title,""),p(2),E(" ",e==null?null:e.description,"")}}function u0(c,a){c&1&&(o(0,"span"),M(1,"Please wait"),m())}var r6=(()=>{let a=class a{constructor(){this.faLinkedinIn=c2,this.faCode=K3,this.faCircleExclamationCheck=$3,this.faWandMagicSparkles=X3}ngOnInit(){}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-services"]],decls:25,vars:18,consts:[[1,"services"],[1,"services-block","m-auto","d-block"],[1,"row","m-auto","py-5","justify-contentrdf-between","align-items-center"],[1,"col-xl-4","position-relative","services-block-col","mx-xl-0","m-auto"],[1,"services-block-note","position-absolute"],[1,"services-block-title","py-3"],[1,"col-xl-8"],[1,"pt-3","services-block-welcome"],[1,"pt-3","services-block-desc"],[1,"py-3","services-block-desc"],[1,"row"],[1,"col-lg-4","p-4"],[1,"services-block-list","p-4","d-flex","justify-content-center","flex-column"],[1,"services-block-list-descblock"],[1,"services-block-list-icon"],[3,"icon",4,"ngIf"],[1,"d-none","services-block-list-desc","py-4"],[3,"icon"],["class","col-lg-4 p-4"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),M(5),u(6,"translate"),m(),o(7,"h2",5),M(8),u(9,"translate"),m()(),o(10,"div",6)(11,"p",7),M(12),u(13,"translate"),m(),o(14,"p",8),M(15),u(16,"translate"),m(),o(17,"p",9),M(18),u(19,"translate"),m()()(),o(20,"div",10),I(21,C0,12,5,"div",18,H0,!1,u0,2,0),u(24,"translate"),m()()()),r&2&&(p(5),g(d(6,6,"services.note")),p(3),g(d(9,8,"services.title")),p(4),g(d(13,10,"services.welcome")),p(3),g(d(16,12,"services.desc1")),p(3),g(d(19,14,"services.desc2")),p(3),U(d(24,16,"services.list")))},dependencies:[k3,C2,$],styles:['@import"https://fonts.cdnfonts.com/css/happy-halloween";.services[_ngcontent-%COMP%]{background:#f1c73a;background-position:top;background-repeat:no-repeat;min-height:95vh;padding-top:3%;padding-bottom:3%}.services-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.services-block-col[_ngcontent-%COMP%]{max-width:1300px}.services-block-note[_ngcontent-%COMP%]{top:0;left:-20px;transform:rotate(-30deg);color:#25568c}.services-block-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.services-block-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:600}}.services-block-desc[_ngcontent-%COMP%]{line-height:40px}.services-block-welcome[_ngcontent-%COMP%]{line-height:40px;font-weight:600;font-family:Happy Halloween,sans-serif;font-size:30px;text-transform:capitalize}.services-block-list[_ngcontent-%COMP%]{padding-top:3%;padding-bottom:7%;border-bottom:3px solid #25568C;background-color:#fff;color:#000;height:100%;transition:all .15s;min-height:400px}.services-block-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{transition:all .15s}.services-block-list[_ngcontent-%COMP%]:hover{background-color:#25568c;color:#fff}.services-block-list[_ngcontent-%COMP%]:hover   .services-block-list-icon[_ngcontent-%COMP%]{font-size:30px;color:#25568c;background-color:#fff;border-radius:50% 50% 0;padding:10px 15px;width:fit-content;margin:0 15px 0 0}.services-block-list[_ngcontent-%COMP%]:hover   .services-block-list-descblock[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.services-block-list[_ngcontent-%COMP%]:hover   .services-block-list-desc[_ngcontent-%COMP%]{display:block!important;line-height:30px;font-size:18px}.services-block-list[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{font-size:1.35rem}.services-block-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;text-align:center;transition:color .05s!important}@media screen and (max-width: 992px){.services-block-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:500}}.services-block-list-icon[_ngcontent-%COMP%]{color:#fff;background-color:#25568c;border-radius:50% 50% 0;padding:10px 15px;width:130px;margin:15px auto;font-size:80px;display:flex;justify-content:center}']});let c=a;return c})();var L0=(()=>{let a=class a{transform(i){return` "${i}" `}};a.\u0275fac=function(r){return new(r||a)},a.\u0275pipe=G1({name:"wrapWithQuotes",type:a,pure:!0});let c=a;return c})(),n6=(()=>{let a=class a{constructor(){this.faPaperPlane=c4,this.faArrowDown=J3,this.faLinkedinIn=c2,this.faMailchimp=Q3,this.faGithub=Y3}ngOnInit(){}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-slider"]],decls:52,vars:39,consts:[[1,"row","slider","m-0","align-items-lg-center","position-relative"],[1,"col-xl-5","order-1","order-xl-0"],[1,"slider-salutation"],["role","img","aria-labelledby","wave",1,"wave"],[1,"slider-name2"],[1,"slider-work"],[1,"slider-description"],[1,"row","py-3","slider-contact"],[1,"col-sm-6","slider-link","py-2"],["href",""],[3,"icon"],[1,"col-sm-6","order-0","order-xl-1","slider-cv","py-2"],[1,"row","slider-socialNetwork","justify-content-around","align-items-center","py-lg-5","py-1"],[1,"col-lg-6"],[1,"col-2","p-2"],["href","https://linkedin.com/in/safa-chaabane"],["size","xl",3,"icon"],["href","https://github.com/safachaabane"],["href","mailto:safa1chaabane@gmail.com"],[1,"col-xl-6","slider-img","position-relative"],[1,"slider-slogan","text-center"],["src","../../../assets/photo-safa.jpg","alt","photo safa chaabane","alt",""],[1,"col-1","d-flex"],[1,"slider-scroll-after","position-absolute","top-0"],[1,"slider-scroll","position-absolute","bottom-0",3,"routerLink","fragment"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"p",2),M(3),u(4,"translate"),o(5,"span",3),M(6,"\u{1F44B}"),m()(),o(7,"p",4),M(8),u(9,"translate"),u(10,"translate"),m(),o(11,"p",5),M(12),u(13,"translate"),m(),o(14,"p",6),M(15),u(16,"translate"),m(),o(17,"div",7)(18,"div",8)(19,"a",9),M(20),u(21,"translate"),V(22,"fa-icon",10),m()(),o(23,"div",11)(24,"a",9),M(25),u(26,"translate"),V(27,"fa-icon",10),m()()(),o(28,"div",12)(29,"div",13),M(30),u(31,"translate"),m(),o(32,"div",14)(33,"a",15),V(34,"fa-icon",16),m()(),o(35,"div",14)(36,"a",17),V(37,"fa-icon",16),m()(),o(38,"div",14)(39,"a",18),V(40,"fa-icon",16),m()()()(),o(41,"div",19)(42,"p",20),M(43),u(44,"wrapWithQuotes"),u(45,"translate"),m(),V(46,"img",21),m(),o(47,"div",22),V(48,"p",23),o(49,"p",24),M(50),u(51,"translate"),m()()()),r&2&&(p(3),E("",d(4,17,"slider.salutation")," "),p(5),N3("",d(9,19,"slider.name1")," ",d(10,21,"slider.name2"),","),p(4),g(d(13,23,"slider.work")),p(3),g(d(16,25,"slider.description")),p(5),E("",d(21,27,"slider.contact")," "),p(2),k("icon",n.faPaperPlane),p(3),E("",d(26,29,"slider.cv")," "),p(2),k("icon",n.faArrowDown),p(3),g(d(31,31,"slider.socialNetwork")),p(4),k("icon",n.faLinkedinIn),p(3),k("icon",n.faGithub),p(3),k("icon",n.faMailchimp),p(3),E("",d(44,33,d(45,35,"slider.slogan"))," "),p(6),k("routerLink",".")("fragment","services"),p(1),g(d(51,37,"slider.scroll")))},dependencies:[X1,C2,$,L0],styles:['@import"https://fonts.cdnfonts.com/css/happy-halloween";.slider[_ngcontent-%COMP%]{height:100vh;padding-top:4%;padding-bottom:4%}.slider-salutation[_ngcontent-%COMP%]{font-size:2rem;font-weight:700}.slider-description[_ngcontent-%COMP%]{padding-left:15%;position:relative}.slider-description[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:12%;height:2px;background-color:#f1c73a;left:0;top:13px}.slider-name2[_ngcontent-%COMP%], .slider-work[_ngcontent-%COMP%]{font-size:2.6rem;font-weight:700;text-transform:uppercase}.slider-contact[_ngcontent-%COMP%]{max-width:400px;margin:auto}.slider-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff;background-color:#25568c;padding:10px 15px;border-radius:15px;text-decoration:none;border:2px solid #25568C}.slider-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fff;color:#25568c}.slider-cv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-weight:600;color:#000;background-color:#f5f4f4;padding:10px 15px;border-radius:15px;text-decoration:none;border:2px solid #f5f4f4}.slider-cv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fff;color:#25568c}.slider-img[_ngcontent-%COMP%]{max-height:600px}.slider-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;max-width:500px;margin:auto;display:block}.slider-slogan[_ngcontent-%COMP%]{font-family:Happy Halloween,sans-serif;max-width:320px;float:right;font-size:22px;margin-bottom:-40px;z-index:2;position:inherit}.slider-scroll[_ngcontent-%COMP%]{writing-mode:vertical-lr;height:20%;right:-25px;cursor:pointer}.slider-scroll-after[_ngcontent-%COMP%]{height:70%;width:2px;background-color:#4c4c4c;right:0}.slider-socialNetwork[_ngcontent-%COMP%], .slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4c4c4c;font-weight:600}.slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#f5f4f4;padding:19px;display:block;border-radius:50%;width:60px;height:60px}.slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#25568c}.wave[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_wave .5s infinite linear;transform:rotate(50deg);transform-origin:right bottom}@keyframes _ngcontent-%COMP%_wave{0%{transform:rotate(20deg)}50%{transform:rotate(50deg)}to{transform:rotate(20deg)}}@media screen and (max-width: 1200px){.slider[_ngcontent-%COMP%]{height:auto}.slider-img[_ngcontent-%COMP%]{max-height:none}.slider-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}}@media screen and (max-width: 900px){.slider-salutation[_ngcontent-%COMP%], .slider-name2[_ngcontent-%COMP%], .slider-work[_ngcontent-%COMP%]{font-size:1rem;font-weight:500}.slider-socialNetwork[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;width:42px;height:42px}.slider-slogan[_ngcontent-%COMP%]{float:none;font-size:19px;margin-bottom:0;display:block;margin-left:auto;margin-right:auto;z-index:2;position:inherit}}']});let c=a;return c})();var x0=(c,a)=>a.id;function b0(c,a){if(c&1&&(o(0,"div",9)(1,"div",10)(2,"h4",11),M(3),m(),o(4,"p",12),M(5),m(),o(6,"p",13),V(7,"img",14),M(8),m()()()),c&2){let e=a.$implicit;p(3),E(" ",e==null?null:e.diplomaName,""),p(2),g(e==null?null:e.date),p(2),k("src","/assets/icons/logo/"+((e==null?null:e.logo)||"")+".jpg",y1),p(1),E(" ",e==null?null:e.schoolName,"")}}function N0(c,a){c&1&&(o(0,"span"),M(1,"Please wait"),m())}function S0(c,a){if(c&1&&(o(0,"li",19),M(1),m()),c&2){let e=a.$implicit;p(1),g(e)}}var k0="qualifications-experience-block-item position-relative",w0=(c,a)=>[k0,c,a];function y0(c,a){if(c&1&&(o(0,"div")(1,"div",2)(2,"div",15)(3,"h4",11),M(4),m()(),o(5,"div",16)(6,"p",12),M(7),m()()(),o(8,"p",13),V(9,"img",14),M(10),m(),o(11,"ul",17),I(12,S0,2,1,"li",19,M1),m(),o(14,"p",18),M(15),m()()),c&2){let e=a.$implicit;u3(S3(7,w0,e.id%2===0?"even":"odd",e.id!==0&&"qualifications-experience-block-item-margin").join(" ")),p(4),E(" ",e==null?null:e.workName,""),p(3),g(e==null?null:e.date),p(2),k("src","/assets/icons/logo/"+((e==null?null:e.logo)||"")+".jpg",y1),p(1),g(e==null?null:e.companyName),p(2),U(e==null?null:e.tasks),p(3),g(e.tools)}}function A0(c,a){c&1&&(o(0,"span"),M(1,"Please wait"),m())}var s6=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-qualifications"]],decls:29,vars:18,consts:[[1,"qualifications","m-0"],[1,"qualifications-block","mx-auto","d-block"],[1,"row"],[1,"col","position-relative"],[1,"qualifications-note","position-absolute"],[1,"qualifications-title","py-3"],[1,"col-lg-12","qualifications-experience"],[1,"qualifications-experience-title","py-3"],[1,"qualifications-experience-block","qualifications-experience-block-2"],[1,"col-xl-3","col-lg-6","qualifications-experience-block"],["key","{$index}",1,"qualifications-experience-block-item","mx-auto","h-100"],[1,"position-relative","qualifications-experience-block-item-title"],[1,"qualifications-experience-block-item-date"],[1,"qualifications-experience-block-item-company"],[1,"qualifications-experience-block-item-company-logo",3,"src"],[1,"col-9"],[1,"col-3"],[1,"qualifications-experience-block-item-tasks"],[1,"qualifications-experience-block-item-tools"],["key","{$index}"],["class","col-xl-3 col-lg-6 qualifications-experience-block"],[3,"class"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),M(5),u(6,"translate"),m(),o(7,"h2",5),M(8),u(9,"translate"),m()()(),o(10,"div",2)(11,"div",6)(12,"h3",7),M(13),u(14,"translate"),m(),o(15,"div",2),I(16,b0,9,4,"div",20,M1,!1,N0,2,0),u(19,"translate"),m()()(),o(20,"div",6)(21,"h3",7),M(22),u(23,"translate"),m(),o(24,"div",8),I(25,y0,16,10,"div",21,x0,!1,A0,2,0),u(28,"translate"),m()()()()),r&2&&(p(5),g(d(6,6,"qualifications.note")),p(3),g(d(9,8,"qualifications.title")),p(5),g(d(14,10,"qualifications.titleEduc")),p(3),U(d(19,12,"qualifications.education")),p(6),g(d(23,14,"qualifications.titleExep")),p(3),U(d(28,16,"qualifications.experience")))},dependencies:[$],styles:['.qualifications[_ngcontent-%COMP%]{background-color:#f1c73a;min-height:95vh;padding-top:3%;padding-bottom:3%}.qualifications-block[_ngcontent-%COMP%]{max-width:1500px;width:90%}.qualifications-note[_ngcontent-%COMP%]{top:0;left:-20px;transform:rotate(-30deg);color:#25568c}.qualifications-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700}@media screen and (max-width: 992px){.qualifications-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:600}}.qualifications-experience-title[_ngcontent-%COMP%]{color:#25568c;font-size:36px;font-weight:500}.qualifications-experience-block[_ngcontent-%COMP%]{border-bottom:4px solid #f1c73a}.qualifications-experience-block-2[_ngcontent-%COMP%]{position:relative;max-width:1458px}@media screen and (min-width: 1200px){.qualifications-experience-block-2[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:100%;width:2px;background-color:#25568c;top:0%;transform:translate(-50%);left:calc(50% + 1px)}}.qualifications-experience-block-item[_ngcontent-%COMP%]{max-width:700px;padding:35px;background-color:#fde9a54d;border-left:3px solid #25568C}.qualifications-experience-block-item-margin[_ngcontent-%COMP%]{margin-top:20px}@media screen and (min-width: 1200px){.qualifications-experience-block-item-margin[_ngcontent-%COMP%]{margin-top:-60px}}.qualifications-experience-block-item-title[_ngcontent-%COMP%]{font-size:18px}.qualifications-experience-block-item-title[_ngcontent-%COMP%]:after{content:"";position:absolute;background-color:#25568c;left:-35px;transform:translateY(-50%);top:50%;clip-path:polygon(60% 0,100% 50%,60% 100%,0 100%,0 0);display:block;width:30px;height:20px}.qualifications-experience-block-item-date[_ngcontent-%COMP%]{font-style:italic;font-size:12px;background-color:#25568c;display:inline-block;padding:5px;color:#fff}.qualifications-experience-block-item-company-logo[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.qualifications-experience-block-item-tasks[_ngcontent-%COMP%]{font-size:14px}.qualifications-experience-block-item-tools[_ngcontent-%COMP%]{font-size:14px;font-weight:500;font-style:italic;text-align:center}@media screen and (min-width: 1200px){.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{margin-right:calc(50% + 30px)!important}.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:2px;width:30px;background-color:#25568c;top:50%;transform:translateY(-50%);left:100%}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]{margin-left:calc(50% + 30px)!important}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:2px;width:31px;background-color:#25568c;top:50%;transform:translateY(-50%);right:100%}}.qualifications-experience-block[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{margin-right:auto}.qualifications-experience-block[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]{margin-left:auto}']});let c=a;return c})();var l6=(()=>{let a=class a{constructor(){}ngOnInit(){}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"home-page","m-auto","d-block"],["id","services"],["id","competances"],["id","qualifications"]],template:function(r,n){r&1&&(o(0,"div"),V(1,"app-header"),o(2,"section",0),V(3,"app-slider"),m(),o(4,"section",1),V(5,"app-services"),m(),o(6,"section",2),V(7,"app-skills"),m(),o(8,"section",3),V(9,"app-qualifications"),m()())},dependencies:[j3,Z3,r6,n6,s6],styles:[".home-page[_ngcontent-%COMP%]{max-width:1500px;width:90%}"]});let c=a;return c})();var f6=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-error"]],decls:2,vars:0,template:function(r,n){r&1&&(o(0,"p"),M(1,"error works!"),m())}});let c=a;return c})();var o6=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-projects"]],decls:2,vars:0,template:function(r,n){r&1&&(o(0,"p"),M(1,"projects works!"),m())}});let c=a;return c})();var T0=[{path:"",children:[],component:d1},{path:":lang",pathMatch:"full",canActivate:[R2],component:l6},{path:":lang/projects",canActivate:[R2],component:o6},{path:"404",component:f6},{path:"**",redirectTo:"404"}],t6=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=Y({type:a}),a.\u0275inj=Z({imports:[A2.forRoot(T0,{scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}),A2]});let c=a;return c})();var u2=class{http;prefix;suffix;constructor(a,e="/assets/i18n/",i=".json"){this.http=a,this.prefix=e,this.suffix=i}getTranslation(a){return this.http.get(`${this.prefix}${a}${this.suffix}`)}};function F0(c){return new u2(c,"./assets/i18n/",".json")}var m6=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=Y({type:a,bootstrap:[d1]}),a.\u0275inj=Z({providers:[F3()],imports:[I3.forRoot({loader:{provide:n1,useFactory:F0,deps:[y3]}}),P3,A3,t6,e6]});let c=a;return c})();var D0=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=Y({type:a,bootstrap:[d1]}),a.\u0275inj=Z({imports:[m6,D3]});let c=a;return c})();export{D0 as default};
