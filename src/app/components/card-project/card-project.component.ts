import { Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input() cardProject: any;
  link=faArrowRight;
  lang:string | null="";
  ngOnInit(){
    this.lang=localStorage.getItem("lang")
    
  }
}
