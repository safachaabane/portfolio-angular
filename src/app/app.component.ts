import { Component } from '@angular/core';
import { TranslateDetectService } from './services/translate-detect.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'safa chaabane';
  loading:boolean=true;
  constructor(private translateDetectService : TranslateDetectService) {}
  ngOnInit()
  {
    const storage: any = typeof localStorage !== 'undefined' ? localStorage.getItem("lang") : null;
  if(storage){
    setTimeout(() => {
      this.translateDetectService.detect(storage)
      this.loading=false;
 }, 1000);
  }else{
    if (typeof navigator !== 'undefined') {
      const userLang = navigator.language || 'en';
      const languageCode = userLang.split('-')[0];
      if (["en","fr","de"].includes(languageCode)){
         setTimeout(() => {
           this.translateDetectService.detect(languageCode)
           this.loading=false;
           localStorage.setItem("lang",languageCode);
      }, 1000);
      }else{
        setTimeout(() => {
          this.translateDetectService.notDetect();
          localStorage.setItem("lang","en");
          this.loading=false;
     }, 1000);
      
      }
    }
    }
  }

}