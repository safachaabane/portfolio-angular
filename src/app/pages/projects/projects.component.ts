import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  faLeft=faLeftLong
  constructor (private location: Location){

  }
  backLastPage() {
    this.location.back();
  }
}
