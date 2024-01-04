import { Component} from '@angular/core';
import { TranslateDetectService } from '../../services/translate-detect.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private translateDetectService: TranslateDetectService) {}
  url : String = "";
  ngOnInit() {
  this.url=localStorage.getItem("lang") || "";
 
  }

  async onChange(language: string) {
    localStorage.clear();
    localStorage.setItem('lang', language);
    this.translateDetectService.detect(language)
  }
}
