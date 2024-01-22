import { Component } from '@angular/core';
import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentDate = new Date();
currentYear = this.currentDate.getFullYear();
faCopyright=faCopyright
faHeart=faHeart
}
