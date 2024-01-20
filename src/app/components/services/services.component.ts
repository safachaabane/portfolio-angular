import { Component } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  faLinkedinIn=faLinkedinIn
  faCode=faCode
  constructor() {}

  ngOnInit() {
  
  }
}
