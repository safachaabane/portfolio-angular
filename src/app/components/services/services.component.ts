import { Component } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {faCode, faScrewdriverWrench, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  faLinkedinIn=faLinkedinIn
  faCode=faCode
  faCircleExclamationCheck=faScrewdriverWrench
  faWandMagicSparkles=faWandMagicSparkles
  constructor() {}

  ngOnInit() {
  
  }
}
