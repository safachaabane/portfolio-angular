import { Component, Pipe, PipeTransform } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Pipe({
  name: 'wrapWithQuotes'
})
export class WrapWithQuotesPipe implements PipeTransform {
  transform(value: string): string {
    return ` "${value}" `;
  }
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',

  styleUrl: './slider.component.scss'
})

export class SliderComponent {
  faPaperPlane=faPaperPlane
  faArrowDown=faArrowDown
  faLinkedinIn=faLinkedinIn
  faMailchimp=faEnvelope
  faGithub=faGithub
  constructor() {}
  url : String = "";
  ngOnInit() {
  this.url=localStorage.getItem("lang") || "";

  }



}
