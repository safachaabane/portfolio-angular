import { Component } from '@angular/core';
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent {
  show : boolean = false;
  faArrowDown=faCircleArrowDown
 
}
